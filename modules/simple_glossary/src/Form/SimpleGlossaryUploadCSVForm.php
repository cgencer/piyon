<?php
namespace Drupal\simple_glossary\Form;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\SafeMarkup;

class SimpleGlossaryUploadCSVForm extends FormBase {  
	
	/**
	 * Set Form Id
	**/	
	function getFormID(){ 
		return 'glossary_upload_csv_page';
	}
	
	/**
	 * Building Form
	**/	
	function buildForm(array $form, FormStateInterface $form_state){	
		$validators = array(
			'file_validate_extensions' => array('csv'),
		  );
		  $form['import_terms_csv'] = array(
			'#type' => 'managed_file',
			'#name' => 'my_file',
			'#title' => t('File *'),
			'#size' => 20,
			'#description' => 'CSV format only',
			'#upload_validators' => $validators,
			'#upload_location' => 'public://glossary_files/',
		
		  );
		  $form['import_terms_csv_help'] = array(
			'#markup'			=> 'Example file of CSV format : <a href="'.$base_url.'/modules/simple_glossary/assets/Glossary_Example.csv">Glossary Example.csv</a> <br /><p>Follow these instructions in CSV file:</p><ul><li>Add escapes( \ ) in term & definition both with comma i.e. fruit\,vegetables.</li><li>Enclosed value of definition with double qoute.</li><li>Replace multiline value into single line.</li></ul>',
		);
		$form['submit'] = array(
			'#type' 	=> 'submit',
			'#value'	=> 'Import', 
		);
		return $form; 
		
	}

	/**
	 * Validating Form
	**/	
	public function validateForm(array &$form, FormStateInterface $form_state) {    
		if ($form_state->getValue('import_terms_csv') == NULL) {
		  $form_state->setErrorByName('import_terms_csv', $this->t('File.'));
		}
	}

	/**
	 * Submiting Form
	**/	
	public function submitForm(array &$form, FormStateInterface $form_state) {
		$file_path 				= \Drupal::service('file_system')->realpath(file_default_scheme() . "://");
		$fileData 				= $form_state->getValue('import_terms_csv');
		$fid 							= $fileData['0'];
		$file 						= \Drupal\file\Entity\File::load($fid);
		$path 						= $file->getFileUri();
		$fileAbsoluteURL 	= file_create_url($path);

		$csvData 	= file_get_contents($fileAbsoluteURL);
		$lines 		= explode(PHP_EOL, $csvData);
		$finalCsvDataAry = [];
		foreach ($lines as $line) {
			$finalCsvDataAry[] = str_getcsv($line,',','"','\\');
		}
		
		$importTermResult = [];
		unset($finalCsvDataAry[0]);
		foreach($finalCsvDataAry as $key=>$val) {
			if(!empty($val[0])) {
				$importTermResult[$key]['status'] = SimpleGlossaryUploadCSVForm::saveGlossaryTerm(['term'=>trim($val[0]), 'definition'=>$val[1]]);
			}
		}
		// Display success message.
		drupal_set_message('Congratulations! Terms successfully imported.');
	}

	
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
//				H E L P E R   M E T H O D S
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

	function saveGlossaryTerm($postData ) {
		$termExistOrNot = GlossaryUploadCSVController::helper_checkTermNameExist($postData['term']);
		$response = 0;
		$term_description = (strlen($postData['definition']) > 2048)?substr($postData['definition'],0,2048):$postData['definition'];
		if(empty($termExistOrNot)) {
				try {
						$id = db_insert('simple_glossary_content')->fields(array(
							'term' 				=> $postData['term'],
							'description' => htmlentities($term_description)
						))->execute();
						$response = ($id)?1:0;
				} catch (Exception $e) { 
					$response = $e->getMessage();
				}
		} else {
				$glossary_id 		= $termExistOrNot['gid'];
				$glossary_term 	=  $termExistOrNot['term'];
				try {
						$id = db_update('simple_glossary_content')->fields(array(
							'description' => htmlentities($term_description)
						))->condition('term', $glossary_term)->execute();
						$response = ($id)?1:0;
				} catch (Exception $e) {
					$response = $e->getMessage();
				}
		}
		return $response;
	}

	function helper_checkTermNameExist($term_name) {
		$data = db_select('simple_glossary_content','t')->fields('t')->condition('term',$term_name)->execute()->fetchAssoc();
		return $data;
	}
}

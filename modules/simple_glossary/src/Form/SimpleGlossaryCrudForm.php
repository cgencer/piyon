<?php
namespace Drupal\simple_glossary\Form;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\SafeMarkup;
use Symfony\Component\HttpFoundation\RedirectResponse;

class SimpleGlossaryCrudForm extends FormBase{
	
	/**
	 * Set Form Id
	**/	
	function getFormID() { 
		$formIdVal = '';
		$current_path = \Drupal::service('path.current')->getPath();
		$temp = explode('/',$current_path);
		if(strpos($current_path, 'glossary/add') != FALSE) {
			$formIdVal = 'add';
		} else if(strpos($current_path, 'glossary/edit') != FALSE) {
			$formIdVal = 'edit';
		} else if(strpos($current_path, 'glossary/delete') != FALSE) {
			$formIdVal = 'delete';
		}
		return 'glossary_'.$formIdVal.'_glossary_term';
	}
	/**
	 * Building Form
	*/	
	function buildForm(array $form, FormStateInterface $form_state, $id='') {	
		$getFormAry = [];
		if(empty($id)) {  // Add Glossary Term
			// Add Operation
			$getFormAry = SimpleGlossaryCrudForm::helper_buildAddGlossaryForm();
		} else {
			// Check is this "id" Valid OR Not ?
			$termValidOrNot = SimpleGlossaryCrudForm::helper_checkTermIdIsValidOrNot($id);
			if(!empty($termValidOrNot)) {
				// When "id" is VALID.
				$current_path = \Drupal::service('path.current')->getPath();
				if(strpos($current_path, 'glossary/edit') != FALSE) {   
					// Edit Glossary Term
					$getFormAry = SimpleGlossaryCrudForm::helper_buildEditGlossaryForm($id, $termValidOrNot); 
				} else if(strpos($current_path, 'glossary/delete') != FALSE) {   
					// Edit Glossary Term
					$getFormAry = SimpleGlossaryCrudForm::helper_buildDeleteGlossaryForm($id);
				}
			} else {
				drupal_set_message(t('Invalid request, This term does not exist.'), 'error');
				SimpleGlossaryCrudForm::helper_drupal_redirect(\Drupal::url('simple_glossary_list_view'));
			}
		}
		foreach($getFormAry as $key=>$val){
			$form[$key] = $val;
		}
		return $form; 
	}
	
	/**
	 * Form Validation
	*/
	public function validateForm(array &$form, FormStateInterface $form_state) {
		$postData 				 = [];
        $postData['crud_type']   = $form_state->getValue('crud_type');
		if($postData['crud_type'] == 'add') {
			$postData['term']  		 = $form_state->getValue('term');
		// Piece of Code for Validation on "ADD" operation
			$termValue = $postData['term'];  
			$termExist = SimpleGlossaryCrudForm::helper_checkTermNameExist($termValue);
			if(!empty($termExist)) { 
				$form_state->setErrorByName('term', $this->t('This Term already exists.'));
			}
		} else if($postData['crud_type'] == 'edit') {
			$postData['term']  		 = $form_state->getValue('term');
			$postData['gid']  		 = $form_state->getValue('gid');
		// Piece of Code for Validation on "EDIT" operation
			$getAnyTermHavingSameName = SimpleGlossaryCrudForm::helper_checkTermNameExistForUpdate($postData['gid'], $postData['term']);
			if(!empty($getAnyTermHavingSameName)) {
				$form_state->setErrorByName('term', $this->t('This Term already exists.'));
			}
		} else if($postData['crud_type'] == 'delete') {
		// Piece of Code for Validation on "DELETE" operation
			// Nothing for now
		}
	}
	
	/**
	 * Form submission
	*/
	function submitForm(array &$form, FormStateInterface $form_state) {
		$postData 				 = [];
        $postData['crud_type']   = $form_state->getValue('crud_type');
		try {
			if($postData['crud_type'] == 'add') {
				$postData['term']   	= $form_state->getValue('term');
				$postData['definition'] = $form_state->getValue('definition');
			// Piece of Code for Validation on "ADD" operation
				$id = db_insert('simple_glossary_content')->fields(array(
					'term' 			=> $postData['term'],
					'description' 	=> strip_tags($postData['definition'])
				))->execute();
				drupal_set_message(t('Configuration! Term has been saved successfully.'));
			} else if($postData['crud_type'] == 'edit') {
				$postData['gid']   		= $form_state->getValue('gid');
				$postData['term']   	= $form_state->getValue('term');
				$postData['definition'] = $form_state->getValue('definition');
			// Piece of Code for Validation on "EDIT" operation
				$id = db_update('simple_glossary_content')->fields(array(
					'term' 			=> $postData['term'], 
					'description' 	=> strip_tags($postData['definition']) 
				))->condition('gid',$postData['gid'])->execute();
				drupal_set_message(t('Configuration! Term has been updated successfully.'));
			} else if($postData['crud_type'] == 'delete') {
				$postData['gid']   		= $form_state->getValue('gid');
			// Piece of Code for Validation on "DELETE" operation
				$id = db_delete('simple_glossary_content')->condition('gid',$postData['gid'])->execute();
				drupal_set_message(t('Configuration! Term has been deleted successfully.'));
			}
			SimpleGlossaryCrudForm::helper_drupal_redirect(\Drupal::url('simple_glossary_list_view'));
		}
		catch (Exception $e) {
			// Log the exception to watchdog.
			\Drupal::logger('simple_glossary')->error($e->getMessage());
			$form_state->setErrorByName('term', $this->t($e->getMessage()));
		}
	}

	/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */
	/*						H E L P E R    F U N C T I O N S				   */
	/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */
	function helper_checkTermNameExist($term_name) { 
		$data = db_select('simple_glossary_content','t')->fields('t')->condition('term',$term_name)->execute()->fetchAssoc();
		return $data;
	}

	function helper_getCurrentOperation() {
		$current_path = \Drupal::service('path.current')->getPath();
		$pos = strpos($mystring, $findme);
		
	}

	function helper_buildAddGlossaryForm() {	// ADD Form
		$form  = [];
		$form['term'] = array(
			'#type' => 'textfield',
			'#title' => t('Term'),
			'#maxlength' => 150, 
			'#required' => TRUE,
		);
		$form['crud_type'] = array(
			'#type' => 'hidden',
			'#default_value' => 'add'
		);
		$form['definition'] = array(
			'#type' => 'textarea',
			'#title' => t('Definition'),
			'#required' => TRUE,
			'#cols' => 20, 
			'#maxlength' => 1000, 
			'#rows' => 5
		);
		$form['submit'] = array(
			'#type' 	=> 'submit',
			'#value'	=> 'Add', 
		);
		return $form;
	}

	function helper_buildEditGlossaryForm($id, $existingData) {	// EDIT Form
		$form  = [];
		$form['gid'] = array(
			'#type' => 'hidden',
			'#default_value' => $id
		);
		$form['crud_type'] = array(
			'#type' => 'hidden',
			'#default_value' => 'edit'
		);
		$form['term'] = array(
			'#type' => 'textfield',
			'#title' => t('Term'),
			'#required' => TRUE,
			'#maxlength' => 150, 
			'#default_value'=>	$existingData['term']
		);
		$form['definition'] = array(
			'#type' => 'textarea',
			'#title' => t('Definition'),
			'#required' => TRUE,
			'#cols' => 20, 
			'#maxlength' => 1000, 
			'#rows' => 5,
			'#default_value'=>	$existingData['description']
		);
		$form['submit'] = array(
			'#type' 	=> 'submit',
			'#value'	=> 'Update', 
		);
		return $form;
	}

	function helper_checkTermNameExistForUpdate($id, $term_name) { 
		$data = db_select('simple_glossary_content','t')->fields('t')->condition('term',$term_name)->condition('gid',$id, '!=')->execute()->fetchAssoc();
		return $data;
	}

	function helper_buildDeleteGlossaryForm($id) {	// DELETE Form 
		$form  = [];
		$form['gid'] = array(
			'#type' => 'hidden',
			'#default_value' => $id
		);
		$form['crud_type'] = array(
			'#type' => 'hidden',
			'#default_value' => 'delete'
		);
		$form['markuptext'] = array(
			'#markup' => 'Are you sure want to delete this term ? <br />'
		);
		$form['submit'] = array(
			'#type' 	=> 'submit',
			'#value'	=> 'Delete', 
			'#suffix'	=> '<a class="button" href="'.$base_url.'/admin/config/system/simple_glossary">Cancel</a>'
		);
		return $form;  
	}

	function helper_checkTermIdIsValidOrNot($id) { 
		$data = db_select('simple_glossary_content','t')->fields('t')->condition('gid',$id)->execute()->fetchAssoc(); 
		return $data;
	}
	
	function helper_drupal_redirect($path) { 
		$response = new RedirectResponse($path);
		$response->send();
		return;
	}
}
<?php
namespace Drupal\simple_glossary\Form;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\SafeMarkup;

/**
 * Simple Glossary terms listing with Filters
**/
class SimpleGlossaryForm extends FormBase {
	/**
	 * Set Form ID
	**/
	function getFormID(){ 
		return 'glossary_listing_view_page';
	}
	
	/**
	 * Build Form
	**/
	function buildForm(array $form, FormStateInterface $form_state){
		
		$keyword 		 = \Drupal::request()->query->get('keyword');
		$form['#method'] = 'get';
		$form['keyword'] = array(
			'#type' => 'textfield',
			'#title' => t('Keyword'),
			'#description' => t('Simple Glossary Term name'),
			'#prefix' => '<div class="glossary-filters"><div id="glossary-filters-keyword" class="glossary-filters-item" >',
			'#required' => TRUE,
			'#suffix' => '</div>',
			'#default_value' => (isset($keyword))?$keyword:'' 
		);
		$form['submit'] = array(
			'#prefix' => '<div id="glossary-filters-submit" class="glossary-filters-item" >',
			'#type' 	=> 'submit',
			'#value'	=> 'Search',
			'#suffix' => '<a href="'.$base_url.'/admin/config/system/simple_glossary" class="button">Reset</a></div></div>',
		);
		$form['glossary_listing'] =  SimpleGlossaryForm::fetchAllTermsFromDB();
		return $form; 
	}
	
	/**
	 * Form submission
	**/
	function submitForm(array &$form, FormStateInterface $form_state){
	}

	// H E L P E R   M E T H O D S
	function fetchAllTermsFromDB() {
		$keyword 	= \Drupal::request()->query->get('keyword');
		$base_query = "SELECT gid, SUBSTR(term,1,1) as letter, term, description FROM simple_glossary_content";
		if((isset($keyword)) && (!empty($keyword)) ) {
			$result  = db_query($base_query." where (term LIKE :d) order by letter ASC", [':d' => "%".$keyword."%"]);  
		} else {
			$result  = db_query($base_query." order by letter ASC");  
		}
		$finalGlossaryResult = [];
		if(!empty($result)) {
			$glossaryResult = [];
			foreach ($result as $row) {
				$glossaryResult[] =(array)$row;
			}
			$finalGlossaryResult = [];
			foreach($glossaryResult as $k=>$v) {
				$v['description'] = html_entity_decode(str_replace('\,',',',$v['description']));
				
				$finalGlossaryResult[strtolower($v[letter])][''.$v['term']] = $v;
			}
			// Sort Inner Array			
			$updatedFinalGlossaryResult = [];
			foreach($finalGlossaryResult as $k=>$v) { 
				ksort($v);
				$updatedFinalGlossaryResult[$k] = $v;
			}
		}
		return [
			'#theme' => 'backend_list_view', 
			'#terms_data' => $updatedFinalGlossaryResult, 
			'#attached' => array(
				'library' => array(
				  'simple_glossary/simple_glossary_list_view_assets' 
				)
			)
		];
	}
}
<?php
namespace Drupal\simple_glossary\Form;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\SafeMarkup;

class SimpleGlossaryConfigForm extends FormBase { 
	
	/**
	 * Set Form Id
	**/	
	function getFormID(){ 
		return 'glossary_configuration_page'; 
	}
	
	/**
	 * Building Form
	**/	
	function buildForm(array $form, FormStateInterface $form_state){	

        $form['glossary_page_title'] = array(
			'#type' => 'textfield',
			'#title' => t('Page Title'),
			'#maxlength' => 500, 
            '#required' => TRUE,
            '#default_value' => \Drupal::state()->get('glossary_page_title')
        );
        $form['glossary_page_subheading'] = array(
			'#type' => 'textfield',
			'#title' => t('Subheading'),
			'#maxlength' => 1024, 
            '#required' => TRUE,
            '#default_value' => \Drupal::state()->get('glossary_page_subheading')
		);
        $form['glossary_bg_image'] = array(
            '#required' => TRUE,
            '#type' => 'managed_file',
            '#name' => 'glossary_bg_image',
            '#title' => t('Background Image'),
            '#size' => 20,
            '#default_value' => json_decode(\Drupal::state()->get('glossary_bg_image')),
            '#description' => 'Allowed extensions : jpg, jpeg, png format only',
            '#upload_location' => 'public://glossary_config/',
            '#upload_validators' => array(
                'file_validate_extensions' => array('jpg jpeg png')
            )
        );
        $form['glossary_bottom_text'] = array(
            '#title'            => t('Bottom Text'),
            '#required'         => TRUE,
            '#type'             => 'textarea',
            '#default_value'    => \Drupal::state()->get('glossary_bottom_text'),
            '#description'      => t('Bottom text of glossary page'),
            );
		$form['submit'] = array(
			'#type' 	=> 'submit',
			'#value'	=> 'Save', 
		);
		return $form; 
		
	}

	/**
	 * Validating Form
	**/	
	public function validateForm(array &$form, FormStateInterface $form_state) {    
	}

	/**
	 * Submiting Form
	**/	
	public function submitForm(array &$form, FormStateInterface $form_state) {
        $postData 				                = [];
        $postData['glossary_page_title']        = $form_state->getValue('glossary_page_title');
        $postData['glossary_page_subheading']   = $form_state->getValue('glossary_page_subheading');
        $tempFile                               = $form_state->getValue('glossary_bg_image');
        // Update file status
        SimpleGlossaryConfigForm::updateFileStatus($tempFile[0]);
        $postData['glossary_bg_image']          = json_encode($form_state->getValue('glossary_bg_image'));
        $postData['glossary_bottom_text']       = $form_state->getValue('glossary_bottom_text');
       
        foreach($postData as $key=>$val) { 
           // Set Variable in Drupal Settings
           \Drupal::state()->set($key, $val);
        }
        drupal_set_message('Configuration has been saved successfully.'); 
    }

    function updateFileStatus($fid){
        try {
            $res = db_update('file_managed')->fields(array('status' => 1))->condition('fid', $fid, '=')->execute();
            return $res;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
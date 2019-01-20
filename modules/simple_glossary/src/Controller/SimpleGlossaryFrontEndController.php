<?php

namespace Drupal\simple_glossary\Controller;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\SafeMarkup;
use Symfony\Component\HttpFoundation\Request;
/**
 * Simple Glossary FrontEnd Controller 
**/
class SimpleGlossaryFrontendController {
	
	public function content() {
		return SimpleGlossaryFrontendController::fetchAllTermsFromDB('A');
	}

	public function contentByLetter($ltr = '') {
		return SimpleGlossaryFrontendController::fetchAllTermsFromDB($ltr);
	}

	public function fetchAllTermsFromDB($ltr = '') {
		global $base_url;
		$keyword 	= \Drupal::request()->query->get('keyword');
		$base_query = "SELECT g.gid, g.term, g.description  FROM simple_glossary_content AS g";
		if((isset($keyword)) && (!empty($keyword)) ) {
			$keywordLength = strlen($keyword);
			if (( $keywordLength == 1 ) && (preg_match("/^[a-zA-Z]$/", strtoupper($keyword)))) {
				$qry = db_query($base_query." WHERE ( SUBSTR(term,1,1) = :d )", [':d'=>$keyword]);
			} else {
				$qry = db_query($base_query." WHERE ( term LIKE :d )", [':d'=>'%'.$keyword.'%']);
			}
		} else if((isset($ltr)) && (!empty($ltr)) ) {
				$qry = db_query($base_query." WHERE ( SUBSTR(term,1,1) = :d )", [':d'=>$ltr]);
		} else {
				$qry = db_query($base_query);
		}
		$glossaryResult = [];
		if ($qry) {
			while ($row = $qry->fetchAssoc()) {
				$glossaryResult[] = $row;
			}
		}
		$finalGlossaryResult = [];
		if(count($glossaryResult)>0) {
			$j 		= 0;
			$temp 	= [];
			for($i=0; $i<count($glossaryResult); $i++) {
				$glossaryResult[$i]['term']        = ucfirst($glossaryResult[$i]['term']);
				$glossaryResult[$i]['description'] = html_entity_decode(str_replace('\,', ',', $glossaryResult[$i]['description']));
				$temp[] = $glossaryResult[$i];
				if(($j == 1) || (count($glossaryResult) == $i+1)) {
					$finalGlossaryResult[] =	$temp;
					unset($temp);
					$j = 0;
				} else {
					$j++;
				}
			}
		}
		$qry_string 			= [];
		$qry_string['keyword'] 	= (isset($keyword))?$keyword:'';
		$qry_string['ltr'] 		= (isset($ltr))?$ltr:'';
		
		$glossaryConfig 				              = [];
        $glossaryConfig['glossary_page_title']        = \Drupal::state()->get('glossary_page_title');
        $glossaryConfig['glossary_page_subheading']   = \Drupal::state()->get('glossary_page_subheading');
		$imagesTemp 						          = json_decode(\Drupal::state()->get('glossary_bg_image'));
		if(!empty($imagesTemp[0])) {
			$file 										  = \Drupal\file\Entity\File::load($imagesTemp[0]);
			$path 										  = $file->getFileUri();
			$glossaryConfig['glossary_bg_image'] 		  =	file_create_url($path); 
		} else {
			$glossaryConfig['glossary_bg_image'] ='';
		}
		$glossaryConfig['glossary_bottom_text']       = html_entity_decode(\Drupal::state()->get('glossary_bottom_text')); 
		
		return [
			'#theme' => 'forntend_list_view',
			'#terms_data' => $finalGlossaryResult,
			'#config' => $glossaryConfig,
			'#base_url'   => $base_url,
			'#qry_string' => $qry_string,
			'#attached'   => array(
				'library' => array(
				  'simple_glossary/simple_glossary_list_view_assets', 
				)
			)
		];
	}
}
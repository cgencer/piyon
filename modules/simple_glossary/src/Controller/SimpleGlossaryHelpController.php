<?php

namespace Drupal\simple_glossary\Controller;
use Drupal\Core\Controller\ControllerBase;

class SimpleGlossaryHelpController extends ControllerBase {

  /**
   * Display the markup. 
   *
   * @return array
   */
  public function content() {
    return SimpleGlossaryHelpController::helper_fetch_help_content();
  }

  function helper_fetch_help_content(){
    return [
      '#theme' => 'help_tab_view',
      '#help_data' => [] 
		];
  }
} 
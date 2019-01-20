<?php

namespace Drupal\simple_global_filter\Entity;

use Drupal\Core\Config\Entity\ConfigEntityInterface;

/**
 * Provides an interface for defining Global filter entities.
 */
interface GlobalFilterInterface extends ConfigEntityInterface {

  /**
   * @return: Taxonomy vocabulary name (string)
   */
  public function getVocabulary();

  /**
   * Sets internal vocabulary name
   */
  public function setVocabulary($vocabulary_name);

}

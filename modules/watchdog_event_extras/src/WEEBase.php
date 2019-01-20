<?php

namespace Drupal\watchdog_event_extras;

use Drupal\watchdog_event_extras\WEEInterface;
use Drupal\Component\Plugin\PluginBase;

/**
 * Base class for WEE plugin types.
 */
abstract class WEEBase extends PluginBase implements WEEInterface {

  /**
   * {@inheritdoc}
   */
  public function id() {
    // Retrieve the @id property from the annotation and return it.
    return $this->pluginDefinition['id'];
  }

  /**
   * {@inheritDoc}
   * @see \Drupal\watchdog_event_extras\WEEInterface::title()
   */
  public function title() {
    // Retrieve the @title property from the annotation and return it.
    return $this->pluginDefinition['title'];
  }

  /**
   * {@inheritDoc}
   * @see \Drupal\watchdog_event_extras\WEEInterface::attached()
   */
  public function attached(&$attached, $dblog) {
    // Do nothing by default.
  }

  /**
   * {@inheritDoc}
   * @see \Drupal\watchdog_event_extras\WEEInterface::markup()
   */
  public function markup($dblog) {
    // Return nothing by default.
    return '';
  }

}

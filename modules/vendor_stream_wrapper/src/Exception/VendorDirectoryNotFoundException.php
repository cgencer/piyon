<?php

namespace Drupal\vendor_stream_wrapper\Exception;

use Exception;
use Throwable;

/**
 * Exception thrown when the vendor directory cannot be retrieved.
 */
class VendorDirectoryNotFoundException extends Exception {

  /**
   * {@inheritdoc}
   */
  public function __construct($message = "", int $code = 0, Throwable $previous = NULL) {
    $message = t('The vendor directory could not be found, and needs to be added to settings.php') . PHP_EOL . $message;
    parent::__construct($message, $code, $previous);
  }

}

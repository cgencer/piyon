<?php

namespace Drupal\vendor_stream_wrapper\Service;

/**
 * Provides services for the Vendor Stream Wrapper module.
 */
class VendorStreamWrapperService implements VendorStreamWrapperServiceInterface {

  /**
   * {@inheritdoc}
   */
  public function creatUrlFromUri($uri) {
    if (strpos($uri, 'vendor://') === 0) {
      if ($wrapper = \Drupal::service('stream_wrapper_manager')->getViaUri($uri)) {
        return $wrapper->getExternalUrl();
      }
    }
    else {
      return $uri;
    }
  }

}

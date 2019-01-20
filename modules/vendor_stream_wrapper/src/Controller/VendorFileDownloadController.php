<?php

namespace Drupal\vendor_stream_wrapper\Controller;

use Drupal\Core\Controller\ControllerBase;
use MimeType\MimeType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

/**
 * Vendor Stream Wrapper file controller.
 *
 * Sets up serving of files from the vendor directory, using the vendor://
 * stream wrapper.
 */
class VendorFileDownloadController extends ControllerBase implements VendorFileDownloadControllerInterface {

  /**
   * {@inheritdoc}
   */
  public function download(Request $request) {
    $filepath = str_replace(':', '/', $request->get('filepath'));
    $scheme = 'vendor';
    $uri = $scheme . '://' . $filepath;

    if (file_exists($uri)) {
      $headers = [
        'Content-Type' => MimeType::getType($uri),
      ];
      return new BinaryFileResponse($uri, 200, [], TRUE);
    }

    throw new NotFoundHttpException();
  }

}

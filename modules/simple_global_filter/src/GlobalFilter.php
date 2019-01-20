<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Drupal\simple_global_filter;

/**
 * Description of GlobalFilter
 *
 * @author alberto
 */
class GlobalFilter {

  public function set($global_filter_id, $value) {
    $data = \Drupal::service('session_cache.cache')->get();
    $data[$global_filter_id] = $value;
    \Drupal::service('session_cache.cache')->set($data);
  }

  public function get($global_filter_id) {
    $cache = &drupal_static('global_filter_get');
    if (isset($cache[$global_filter_id])) {
      return $cache[$global_filter_id];
    }

    // First, check if it comes in the request:
    $value = \Drupal::request()->get($global_filter_id);
    if (!empty($value)) {
      // Check if the global filter uses alias:
      $global_filter = \Drupal::entityTypeManager()->getStorage('global_filter')->load($global_filter_id);
      $alias_field = $global_filter->getAliasField();
      if ($alias_field) {
        // Get the actual value from the alias:
        $result = \Drupal::entityQuery('taxonomy_term')->condition($alias_field, $value)->execute();
        if (count($result)) {
          $cache[$global_filter_id] = current($result);
          return current($result);
        }
        else {
          // There is not any taxonomy_term with this alias, return term id:
          $cache[$global_filter_id] = $value;
          return $value;
        }
      }
      else {
        $cache[$global_filter_id] = $value;
        return $value;
      }
    }

    // If not, check in the cache:
    $data = \Drupal::service('session_cache.cache')->get();
    if (empty($data[$global_filter_id])) {
      // If the user did not select any value, return the default value
      $cache[$global_filter_id] = \Drupal::entityTypeManager()->getStorage('global_filter')->load($global_filter_id)->getDefaultValue();
      return $cache[$global_filter_id];
    }
    else {
      $cache[$global_filter_id] = $data[$global_filter_id];
      return $data[$global_filter_id];
    }
  }
}

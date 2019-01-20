<?php

namespace Drupal\simple_global_filter\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\Html;
use Drupal\taxonomy\Entity\Term;

/**
 * Class SelectGlobalFilter.
 */
class SelectGlobalFilter extends FormBase {

  protected $form_id;

  /**
   * {@inheritdoc}
   */
  public function __construct($form_id = 'select_global_filter') {
    $this->form_id = $form_id;
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {

    if (!is_null($this->form_id)) {
      return $this->form_id;
    }

    return 'select_global_filter';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, $options = NULL) {

    $global_filter_id = Html::getId($this->getFormId());

    $default_value = \Drupal::service('simple_global_filter.global_filter')->get($global_filter_id);
    $form['global_filter'] = [
      '#type' => 'select',
      '#options' => $options,
      '#default_value' => $default_value,
      '#attributes' => [
        'onChange' => "document.getElementById(\"$global_filter_id\").submit();"
      ],
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
      '#attributes' => [
        'class' => [
          'submit-global-filter',
        ],
      ],
      '#attached' => [
        'library' => [
          'simple_global_filter/select_form'
        ],
      ],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    \Drupal::service('simple_global_filter.global_filter')->set($this->getFormId(), $form_state->getValue('global_filter'));
    // Set the global filter in the URL
    $global_filter = \Drupal::entityTypeManager()->getStorage('global_filter')->load($this->getFormId());
    $alias_field = $global_filter->getAliasField();
    if ($alias_field) {
      $term = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->load($form_state->getValue('global_filter'));
      if ($term instanceof Term) {
        $alias_value = $term->get($alias_field)->getValue();
        if (!empty($alias_value[0]['value'])) {
          \Drupal::request()->query->set($this->getFormId(), $alias_value[0]['value']);
        }
        else {
          // No alias provided for this term, use default term id value:
          \Drupal::request()->query->set($this->getFormId(), $form_state->getValue('global_filter'));
        }
      }
      else {
        \Drupal::request()->query->set($this->getFormId(), $form_state->getValue('global_filter'));
      }
    }
    else {
      \Drupal::request()->query->set($this->getFormId(), $form_state->getValue('global_filter'));
    }
  }

}

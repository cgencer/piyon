<?php

namespace Drupal\flow_player_field\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * A widget to input video URLs.
 *
 * @FieldWidget(
 *   id = "flow_player_field_textfield",
 *   label = @Translation("Video Textfield"),
 *   field_types = {
 *     "flow_player_field"
 *   },
 * )
 */
class VideoTextfield extends WidgetBase
{

    /**
     * {@inheritdoc}
     */
    public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state)
    {
        $element['value'] = $element + [
            '#type' => 'textfield',
            '#default_value' => isset($items[$delta]->value) ? $items[$delta]->value : null,
            '#size' => 60,
            '#maxlength' => $this->getFieldSetting('max_length'),
            '#attributes' => ['class' => ['js-text-full', 'text-full']],
            '#allowed_providers' => $this->getFieldSetting('allowed_providers'),
            '#theme' => 'input__video',
        ];
        return $element;
    }

}

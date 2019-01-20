<?php

namespace Drupal\flow_player_field;

use Drupal\Component\Plugin\Mapper\MapperInterface;
use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Plugin\DefaultPluginManager;

/**
 * Gathers the provider plugins.
 */
class ProviderManager extends DefaultPluginManager implements ProviderManagerInterface, MapperInterface
{

    /**
     * {@inheritdoc}
     */
    public function __construct(\Traversable $namespaces, CacheBackendInterface $cache_backend, ModuleHandlerInterface $module_handler)
    {
        parent::__construct('Plugin/flow_player_field/Provider', $namespaces, $module_handler, 'Drupal\flow_player_field\ProviderPluginInterface', 'Drupal\flow_player_field\Annotation\FlowPlayerProvider');
        $this->alterInfo('flow_player_field_provider_info');
    }

    /**
     * {@inheritdoc}
     */
    public function getProvidersOptionList()
    {
        $options = [];
        foreach ($this->getDefinitions() as $definition) {
            $options[$definition['id']] = $definition['title'];
        }
        return $options;
    }

    /**
     * {@inheritdoc}
     */
    public function loadDefinitionsFromOptionList($options)
    {
        $definitions = [];
        // When no options are selected, all plugins are applicable.
        if (count(array_keys($options, '0')) == count($options) || empty($options)) {
            return $this->getDefinitions();
        } else {
            foreach ($options as $provider_id => $enabled) {
                if ($enabled) {
                    $definitions[$provider_id] = $this->getDefinition($provider_id);
                }
            }
        }
        return $definitions;
    }

    /**
     * {@inheritdoc}
     */
    public function filterApplicableDefinitions(array $definitions, $user_input)
    {
        foreach ($definitions as $key => $definition) {
            if ($key == 'flowplayer') {
                return $definition;
            }
            $is_applicable = $definition['class']::isApplicable($user_input);
            if ($is_applicable) {
                return $definition;
            }
        }
        return false;
    }

    /**
     * {@inheritdoc}
     */
    public function loadProviderFromInput($input)
    {
        $definition = $this->loadDefinitionFromInput($input);
        return $definition ? $this->createInstance($definition['id'], ['input' => $input]) : false;
    }

    /**
     * {@inheritdoc}
     */
    public function loadDefinitionFromInput($input)
    {
        return $this->filterApplicableDefinitions($this->getDefinitions(), $input);
    }

    public function loadDefinition($provider)
    {
        $definitions = $this->getDefinitions();
        return isset($definitions[$provider]) ? $definitions[$provider] : false;
    }

    public function loadProvider($provider, $embed_data = array())
    {
        $definition = $this->loadDefinition($provider);
        return $definition ? $this->createInstance($definition['id'], ['embed_data' => $embed_data]) : false;
    }

}

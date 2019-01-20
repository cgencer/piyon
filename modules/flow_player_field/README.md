# Flow player module 
This is a Drupal module enabling the users of [Flowplayer](https://flowplayer.com/) to include embed videos to articles.

## Official Drupal.log
The module can be found on [Drupal.org](https://www.drupal.org/project/flow_player_field)

## Table of content
* [Introduction](#introduction)
* [Requirements](#Requirements)
* [Recomended modules](#recomended-modules)
* [Instalation](#instalation)
* [Configuration](#configuration)

## Introduction
Provides a field type for displaying videos from Flowplayer

## Requirements 
* [Composer](https://getcomposer.org/) 
* [Drush](https://www.drush.org/)
* [Guzzle](https://github.com/guzzle/guzzle)

## Recomended modules
* drupal:field
* drupal:image

## Installing
* In order to install the module we will need composer installed.
* After composer is installed download the module folder and add it in ```[root]/web/modules/flow_player_field```
* run ```composer install``` for the dependencies to be installed
* after everything is installed we can proceed with the configuration

## Configuration
1. In order to enable Flowplayer we will have to login and go to 
`example.com/admin/modules` and **install** the module. 
There is a group called FLOWPLAYER and we should check **Flowplayer Field** and **Flowplayer WYSIWYG**.
After we check those checkboxes we should scroll down and click the *install* button.
2. After the module is installed we should go to `example.com/admin/config/flow_player_field` and fill out the fields on the form.
    * Api Key
    * Site ID
    * Search results number (has default value)
    * Embed code (has default value)
    
    Now we save the configuration
3. The last step is configuring our CKEditor. We will do that by going to `example.com/admin/config/content/formats` and configure the editor that we want to use. When we click the configure *configure* button we have to:
    * Drag the flowplayer icon to the toolbar
    * Check the **Flowplayer WYSIWYG** checkbox in the *Enabled filters* group
    Clicking *Save configuration* and we are good to go


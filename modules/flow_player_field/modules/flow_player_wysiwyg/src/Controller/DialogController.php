<?php

namespace Drupal\flow_player_wysiwyg\Controller;

use Drupal\Core\Controller\ControllerBase;
use GuzzleHttp\Client;
use Symfony\Component\HttpFoundation\JsonResponse;

class DialogController extends ControllerBase
{
    protected $url = 'https://web.lemonwhale.com/';
    protected $siteID;
    protected $apiKey;
    protected $pageSize = 100;
    protected $format = 'json';
    protected $client;

    public function __construct()
    {
        $config = \Drupal::config('flow_player_field.settings');

        $this->siteID = $config->get('site_id');
        $this->apiKey = $config->get('api_key');
        $this->pageSize = $config->get('search_results');
        $this->client = new Client();
    }

    public function getVideos()
    {
        $url = "{$this->url}web/video/v2/site/{$this->siteID}.{$this->format}?api_key={$this->apiKey}";
        $url .= '&sort_by=published_at';
        $url .= '&sort_order=desc';
        $url .= '&page_size=' . $this->pageSize;

        if (isset($_GET['search']) && $_GET['search'] != '') {
            $url .= '&search=' . $_GET['search'];
        }

        $response = $this->client->request('GET', $url);
        $json = json_decode($response->getBody()->getContents());
        return new JsonResponse($json);
    }

    public function getPlayers()
    {
        $url = "{$this->url}web/player/v2/site/{$this->siteID}.{$this->format}?api_key={$this->apiKey}";

        $response = $this->client->request('GET', $url);
        $json = json_decode($response->getBody()->getContents());
        return new JsonResponse($json);
    }
}

<?php

/**
 * @file
 * Contains \Drupal\chatroom\FeedStorage.
 */

namespace Drupal\chatroom;

use Drupal\Core\Entity\Sql\SqlContentEntityStorage;

/**
 * Storage controller class for chatrooms.
 *
 * This extends the Drupal\Core\Entity\Sql\SqlContentEntityStorage class, adding
 * required special handling for chatroom  entities.
 */
class ChatroomStorage extends SqlContentEntityStorage {

}

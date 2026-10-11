<?php
/*
 * Plugin Name:       WP Advanced
 * Plugin URI:        https://github.com/NikolayLeshchev/WP-Advanced
 * Description:       Plugin for testing advanced WP fuatures.
 * Version:           1.0
 * Requires at least: 6.5
 * Requires PHP:      8.0
 * Author:            Mikalai Liashchou
 * Author URI:        https://github.com/NikolayLeshchev
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-advanced
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once __DIR__ . '/vendor/autoload.php';

( new WpAdvanced\Plugin() )->init();
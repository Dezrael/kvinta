<?php

use kvinta\lib\Lang;
use kvinta\lib\App;

error_reporting(E_ALL);
ini_set('display_errors', 1);

define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(dirname(__FILE__)));
define('VIEWS_PATH', ROOT . DS . 'views');

require_once ROOT . DS . 'vendor' . DS . 'autoload.php';
require_once ROOT . DS . 'config' . DS . 'config.php';

function __($key, $default_value = '')
{
    return Lang::get($key, $default_value);
}

session_start();

App::run($_SERVER['REQUEST_URI']);
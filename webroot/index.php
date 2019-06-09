<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(dirname(__FILE__)));
define('VIEWS_PATH', ROOT.DS.'views');

require_once ROOT.DS.'lib'.DS.'init.php';

session_start();

App::run($_SERVER['REQUEST_URI']);
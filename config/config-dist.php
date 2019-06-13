<?php

use kvinta\lib\Config;

Config::set('site_name', 'Site name');
Config::set('languages', ['en', 'ru']);
Config::set('routes', [
    'default' => '',
    'admin' => 'admin_'
]);
Config::set('default_route', 'default');
Config::set('default_language', 'ru');
Config::set('default_controller', 'index');
Config::set('default_action', 'index');

Config::set('db.host', 'host');
Config::set('db.user', 'user');
Config::set('db.password', 'password');
Config::set('db.name', 'dbname');

Config::set('salt', 'asdfjefrtjg0pfgmepgf');
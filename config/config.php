<?php

use kvinta\lib\Config;

Config::set('site_name', 'Your site name');
Config::set('languages', ['en', 'ru']);
Config::set('routes', [
    'default' => '',
    'admin' => 'admin_'
]);
Config::set('default_route', 'default');
Config::set('default_language', 'ru');
Config::set('default_controller', 'index');
Config::set('default_action', 'index');

Config::set('db.host', 'localhost');
Config::set('db.user', 'root');
Config::set('db.password', '');
Config::set('db.name', 'kvinta');

Config::set('salt', 'asdfjefrtjg0pfgmepgf');
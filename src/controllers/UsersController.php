<?php

namespace kvinta\controllers;

use kvinta\lib\Session;
use kvinta\lib\Router;
use kvinta\lib\Controller;
use kvinta\lib\Config;
use kvinta\lib\App;
use kvinta\models\User;

class UsersController extends Controller
{
    public function __construct(array $data = array())
    {
        parent::__construct($data);
        $this->model = new User();
    }

    public function admin_login()
    {
        if ($_POST && isset($_POST['login']) && isset($_POST['password'])) {
            $user = $this->model->getByLogin($_POST['login']);
            $hash = md5(Config::get('salt') . $_POST['password']);

            if ($user && $user['is_active'] && $hash == $user['password']) {
                Session::set('login', $user['login']);
                Session::set('role', $user['role']);
            }
            Router::redirect(App::getRoot() . '/admin/');
        }
    }

    public function admin_logout()
    {
        Session::destroy();
        Router::redirect(App::getRoot());
    }
}
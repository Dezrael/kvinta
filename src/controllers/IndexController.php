<?php

namespace kvinta\controllers;

use kvinta\lib\Controller;
use kvinta\lib\Router;

class IndexController extends Controller
{
    public function index()
    {

    }

    public function admin_index()
    {
        Router::redirect('/admin/regions');
    }
}
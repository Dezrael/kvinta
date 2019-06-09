<?php

namespace kvinta\controllers;

use kvinta\lib\Controller;
use kvinta\lib\Session;
use kvinta\models\Message;

class ContactsController extends Controller
{
    public function __construct(array $data = array())
    {
        parent::__construct($data);
        $this->model = new Message();
    }

    public function index()
    {
        if ($_POST) {
            if ($this->model->save($_POST)) {
                Session::setFlash(__('MessageSendSuccessfully'));
            }
        }
    }

    public function admin_index()
    {
        $this->data = $this->model->getList();
    }
}
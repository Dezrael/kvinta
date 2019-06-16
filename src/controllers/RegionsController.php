<?php

namespace kvinta\controllers;

use kvinta\lib\Controller;
use kvinta\lib\Session;
use kvinta\lib\Router;
use kvinta\models\Region;

class RegionsController extends Controller
{
    public function __construct(array $data = array())
    {
        parent::__construct($data);
        $this->model = new Region();
    }

    public function admin_index()
    {
        $this->data['regions'] = $this->model->getList();
    }

    public function list()
    {
        $data = $this->model->getList();
        $data = array_combine(array_column($data, 'code'), $data);

        $this->data = json_encode($data, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
    }

    public function admin_edit()
    {
        if ($_POST) {
            $id = isset($_POST['id']) ? $_POST['id'] : null;
            $result = $this->model->save($_POST, $id);
            if ($result) {
                Session::setFlash('Region was saved');
            } else {
                Session::setFlash('Error');
            }
            Router::redirect('/admin/regions/');
        }

        if (isset($this->params[0])) {
            $this->data['region'] = $this->model->getById($this->params[0]);
        } else {
            Session::setFlash('Wrong region id');
            Router::redirect('/admin/regions/');
        }
    }

    public function admin_add()
    {
        if ($_POST) {
            $result = $this->model->save($_POST);
            if ($result) {
                Session::setFlash('Region was saved');
            } else {
                Session::setFlash('Error');
            }
            Router::redirect('/admin/regions');
        }
    }

    public function admin_delete()
    {
        if (isset($this->params[0])) {
            $result = $this->model->delete($this->params[0]);
            if ($result) {
                Session::setFlash('Region was deleted');
            } else {
                Session::setFlash('Error');
            }
        }
        Router::redirect('/admin/regions');
    }
}
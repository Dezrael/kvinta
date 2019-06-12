<?php

namespace kvinta\lib;

class View
{
    protected $data;
    protected $path;

    protected static function getDefaultViewPath()
    {
        $router = App::getRouter();
        if (!$router) {
            return false;
        }
        $controller_dir = $router->getController();
        $template_name = $router->getMethodPrefix() . $router->getAction() . '.twig';

        return $controller_dir . DS . $template_name;
    }

    public function __construct($data = array(), $path = null)
    {
        if (!$path) {
            $path = self::getDefaultViewPath();
        }
        $this->path = $path;
        $this->data = $data;
    }

    public function render()
    {
        $loader = new \Twig\Loader\FilesystemLoader(VIEWS_PATH);
        $twig = new \Twig\Environment($loader, $this->data);

        $this->data['sitename'] = Config::get('site_name');
        $this->data['root'] = App::getRoot();
        $this->data['message'] = Session::flash();
        $this->data['controller'] = App::getRouter()->getController();
        $this->data['lang'] = Lang::getData();
        $this->data['role'] = Session::get('role');
        $this->data['login'] = Session::get('login');
        $this->data['languages'] = Config::get('languages');
        $this->data['uri'] = App::getRouter()->getUri();
        $this->data['uriWithoutLang'] = App::getRouter()->getUriWithoutLang();

        return $twig->render($this->path, $this->data);
    }
}
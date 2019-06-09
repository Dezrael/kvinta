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
//        if (!file_exists($path)) {
//            throw new \Exception('Template file is not found in path: ' . $path);
//        }
        $this->path = $path;
        $this->data = $data;
    }

    public function render()
    {
        $loader = new \Twig\Loader\FilesystemLoader(VIEWS_PATH);
        $twig = new \Twig\Environment($loader, $this->data);

//        $data = $this->data;
//
//        ob_start();
//        include $this->path;
//        $content = ob_get_clean();

//        return $content;

//        var_dump($this->path);die();

        $this->data['sitename'] = Config::get('site_name');
        $this->data['root'] = App::getRoot();
        $this->data['message'] = Session::flash();
        $this->data['controller'] = App::getRouter()->getController();
        $this->data['lang'] = Lang::getData();

        return $twig->render($this->path, $this->data);
    }
}
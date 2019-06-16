<?php

namespace kvinta\models;

use kvinta\lib\Model;

class Region extends Model
{
    public function getList()
    {
        $sql = 'select * from regions';
        return $this->db->query($sql);
    }

    public function getById($id)
    {
        $sql = "select * from regions where id = '{$id}' limit 1";
        $result = $this->db->query($sql);
        return isset($result[0]) ? $result[0] : null;
    }

    public function save($data, $id = null)
    {
        if (!isset($data['name']) || !isset($data['code']) || !isset($data['data'])) {
            return false;
        }

        $id = (int)$id;
        $name = $this->db->escape($data['name']);
        $code = $this->db->escape($data['code']);
        $ddata = $this->db->escape($data['data']);
        $city = $this->db->escape($data['city']);
        $population = (int)$data['population'];
        $density = (float)$data['density'];
        $area = (int)$data['area'];

        if (!$id) {
            $sql = "
            insert into regions
               set Name = '{$name}',
                   Code = '{$code}',
                   city = '{$city}',
                   population = {$population},
                   density = {$density},
                   area = {$area},
                   Data = '{$ddata}'
            ";
        } else {
            $sql = "
            update regions
               set Name = '{$name}',
                   Code = '{$code}',
                   city = '{$city}',
                   population = {$population},
                   density = {$density},
                   area = {$area},
                   Data = '{$ddata}'
             where id = {$id}
            ";
        }

        return $this->db->query($sql);
    }

    public function delete($id)
    {
        $id = (int)$id;

        $sql = "
        delete from regions
         where id = {$id}
        ";

        return $this->db->query($sql);
    }
}
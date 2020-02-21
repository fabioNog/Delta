<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class aluno_model extends CI_Model {

    private $aluno = 'aluno';
	
    function get_aluno_list() {
        $query = $this->db->get($this->aluno);
        if ($query) {
            return $query->result();
        }
        return NULL;
    }

    function get_aluno($id) {
        $query = $this->db->get_where($this->aluno, array("id" => $id));
        if ($query) {
            return $query->row();
        }
        return NULL;
    }
	
    function add_aluno($aluno_nome, $aluno_url) {
        $data = array('nome' => $aluno_nome);
        $this->db->insert($this->aluno, $data);
    }

    function update_aluno($aluno_id, $aluno_nome, $aluno_url) {
        $data = array('nome' => $aluno_nome);
        $this->db->where('id', $aluno_id);
        $this->db->update($this->aluno, $data);
    }
	
    function delete_aluno($aluno_id) {
        $this->db->where('id', $aluno_id);
        $this->db->delete($this->aluno);
    }

}
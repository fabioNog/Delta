<?php
class Aluno_model extends CI_Model
{

  public function __construct()
  {

    $this->load->database();
  }

  //API call - get a aluno record by nome
  public function getalunobyid($id)
  {
    $this->db->select('a_nome, image,end_num,end_rua,end_bairro,end_cidade,end_estado,end_cep');
    $this->db->from('aluno');
    $this->db->where('id', $id);
    $query = $this->db->get();

    if ($query->num_rows() == 1) {
      return $query->result_array();
    } else {
      return 0;
    }
  }



  //API call - get all alunos record
  public function getallalunos()
  {
    $this->db->select('id,a_nome,image');
    $this->db->from('aluno');
    $this->db->order_by("id", "desc");
    $query = $this->db->get();
    if ($query->num_rows() > 0) {
      return $query->result_array();
    } else {
      return 0;
    }
  }

  //API call - get all alunos id
  public function getallalunosid()
  {
    $this->db->select('id');
    $this->db->from('aluno');
    $this->db->order_by("id", "asc");
    $query = $this->db->get();
    if ($query->num_rows() > 0) {
      return $query->result_array();
    } else {
      return 0;
    }
  }

  //API call - delete a Aluno record
  public function delete($id)
  {
    $this->db->where('id', $id);
    if ($this->db->delete('aluno')) {
      return true;
    } else {
      return false;
    }
  }

  //API call - add new Aluno record
  public function add($data)
  {
    if ($this->db->insert('aluno', $data)) {
      return true;
    } else {
      return false;
    }
  }

  //API call - update a Aluno record
  public function update($id, $data)
  {
    $this->db->where('id', $id);
    if ($this->db->update('aluno', $data)) {
      return true;
    } else {
      return false;
    }
  }
}

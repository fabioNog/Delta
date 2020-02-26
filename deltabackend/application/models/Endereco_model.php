<?php
  class endereco_model extends CI_Model {
       
      public function __construct(){
          
        $this->load->database();
        
      }
      
      //API call - get a endereco record by nome
      public function getenderecobyEndCodigo($end_aluno){  
           $this->db->select('end_aluno, end_aluno');
           $this->db->from('endereco');
           $this->db->where('end_aluno',$end_aluno);
           $query = $this->db->get();
           
           if($query->num_rows() == 1)
           {
               return $query->result_array();
           }
           else
           {
             return 0;
          }
      }
    //API call - get all enderecos record
    public function getallenderecos(){   
        $this->db->select('end_id,end_aluno,end_num,end_rua,end_bairro,end_cidade,end_cep');
        $this->db->from('endereco');
        $this->db->order_by("end_id", "desc"); 
        $query = $this->db->get();
        if($query->num_rows() > 0){
          return $query->result_array();
        }else{
          return 0;
        }
    }
   
   //API call - delete a endereco record
    public function delete($end_id){
       $this->db->where('end_id', $end_id);
       if($this->db->delete('endereco')){
          return true;
        }else{
          return false;
        }
   }
   
   //API call - add new endereco record
    public function add($data){
        if($this->db->insert('endereco', $data)){
           return true;
        }else{
           return false;
        }
    }
    
    //API call - update a endereco record
    public function update($end_id, $data){
       $this->db->where('end_id', $end_id);
       if($this->db->update('endereco', $data)){
          return true;
        }else{
          return false;
        }
    }
}
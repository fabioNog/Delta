<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require(APPPATH.'/libraries/REST_Controller.php');
header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Content-Type');
	exit;
}
 
class Api extends REST_Controller{
    
    public function __construct()
    {
        parent::__construct();

        $this->load->model('aluno_model');
    }

    //API - client sends id and on valid nome aluno information is sent back
    function alunoByNome_get(){
        $nome  = $this->get('a_nome');        
        if(!$nome){
            $this->response("No Id specified", 400);
            exit;
        }

        $result = $this->aluno_model->getalunobynome($nome);

        if($result){
            $this->response($result, 200); 
            exit;
        } 
        else{
             $this->response("Invalid ID", 404);
            exit;
        }
    } 

    //API - client sends id and on valid id aluno information is sent back
    function alunoById_get(){
        $id  = $this->get('id');        
        if(!$id){
            $this->response("No Id specified", 400);
            exit;
        }

        $result = $this->aluno_model->getalunobyid($id);

        if($result){
            $this->response($result, 200); 
            exit;
        } 
        else{
             $this->response("Invalid ID", 404);
            exit;
        }
    }

    //API -  Fetch All Alunos
    function aluno_get(){
        $result = $this->aluno_model->getallalunos();

        if($result){
            $this->response($result, 200); 
        } 

        else{

            $this->response("No record found", 404);

        }
    }

    function aluno_id_get(){
        $result = $this->aluno_model->getallalunosid();

        if($result){
            $this->response($result, 200); 
        } 

        else{

            $this->response("No record found", 404);

        }
    }
     
    //API - create a new aluno item in database.
    function addAluno_post(){        
        //Aluno
         $nome = $this->post('a_nome');
         $image = $this->post('image');
        
        //Endereco
        $end_num = $this->post('end_num');
        $end_rua = $this->post('end_rua');
        $end_bairro = $this->post('end_bairro');
        $end_cidade = $this->post('end_cidade');
        $end_estado = $this->post('end_estado');
        $end_cep = $this->post('end_cep');

        if(!$nome || !$image || !$end_num || !$end_rua || !$end_bairro || !$end_cidade || !$end_estado || !$end_cep){
        $this->response("Enter complete aluno information to save no banco", 400);
        }
         else{
            $aluno = $this->aluno_model->add(array(
            "a_nome"=>$nome,
            "image"=>$image,
            "end_num"=>$end_num,
            "end_rua"=>$end_rua,
            "end_bairro"=>$end_bairro,
            "end_cidade"=>$end_cidade,
            "end_estado"=>$end_estado,
            "end_cep"=>$end_cep));

            if($aluno === 0){
                $this->response("Aluno information coild not be saved. Try again.", 404);
            }else{
                $this->response("success", 200);             
            }
        }
    }

    
    //API - update a aluno 
    function updateAluno_put(){
         
         $id = $this->put('id');
         $name = $this->put('a_nome');
         $image = $this->put('image');
         $end_num = $this->put('end_num');
         $end_rua = $this->put('end_rua');
         $end_bairro = $this->put('end_bairro');
         $end_cidade = $this->put('end_cidade');
         $end_estado = $this->put('end_estado');
         $end_cep = $this->put('end_cep');


         if(!$id){
            $this->response("Enter complete aluno information to save", 400);
         }else{
            $result = $this->aluno_model->update($id, array(
                "a_nome"=>$name,
                "image"=>$image,
                "end_num" => $end_num,
                "end_rua"=>$end_rua,
                "end_bairro"=>$end_bairro,
                "end_cidade"=>$end_cidade,
                "end_estado"=>$end_estado,
                "end_cep"=>$end_cep));
            if($result === 0){
                $this->response("aluno information coild not be saved. Try again.", 404);
            }else{
                $this->response("success", 200);  
            }
        }
    }

    //API - delete a aluno 
    function deleteAluno_delete()
    {
        $id  = $this->delete('id');
        if(!$id){
            $this->response("Parameter missing", 404);
        }         
        if($this->aluno_model->delete($id))
        {
            $this->response("Success when delete $id", 200);
        } 
        else
        {
            $this->response("Failed", 400);
        }
    }


}
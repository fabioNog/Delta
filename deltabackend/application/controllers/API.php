<?php

require(APPPATH.'/libraries/REST_Controller.php');
 
class Api extends REST_Controller{
    
    public function __construct()
    {
        parent::__construct();

        $this->load->model('aluno_model');
    }

    //API - client sends id and on valid isbn aluno information is sent back
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

             $this->response("Invalid ISBN", 404);

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
     
    //API - create a new aluno item in database.
    function addAluno_post(){

         $nome      = $this->post('a_nome');
        
         if(!$nome){

                $this->response("Enter complete aluno information to save", 400);

         }else{

            $result = $this->aluno_model->add(array("a_nome"=>$nome));

            if($result === 0){

                $this->response("Aluno information coild not be saved. Try again.", 404);

            }else{

                $this->response("success", 200);  
           
            }

        }

    }

    
    //API - update a aluno 
    function updateAluno_put(){
         
         $name      = $this->put('a_name');

         $id        = $this->put('id');
         
         if(!$name){

                $this->response("Enter complete aluno information to save", 400);

         }else{
            $result = $this->aluno_model->update($id, array("a_name"=>$name));

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

            $this->response("Success", 200);

        } 
        else
        {

            $this->response("Failed", 400);

        }

    }


}
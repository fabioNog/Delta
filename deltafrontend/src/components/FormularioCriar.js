import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//Axios import
import axios from 'axios';
import qs  from 'qs'
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#EB5160',
  },

  input: {
    marginTop: theme.spacing(2),
  },
  avatar: {
    marginTop: theme.spacing(2),
  },
}));

export default function Cadastrar() {
  const classes = useStyles();

  //States do Aluno
  const [a_nome, setAnome] = useState('');
  const [image, setImage] = useState('');
  const [file, setFile] = useState('null');
  
  //States do Endereco
  const [end_aluno, setEndAluno] = useState(0);
  const [end_num, setEndNum] = useState(0);
  const [end_rua, setEndRua] = useState('');
  const [end_bairro, setEndBairro] = useState('');
  const [end_cidade, setEndCidade] = useState('');
  const [end_cep, setEndCep] = useState('');
  
  
  //Metodo upload Input
  const upload = e =>{
    let files = e.target.files[0]
    setFile(URL.createObjectURL(files))
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = (e) => {              
        setImage(e.target.result)
    }
  }

  const handleNome = (e) =>{
    return setAnome(e.target.value)
  }

  const handleEndAluno = (e) =>{
    return setEndAluno(e.target.value)
  }

  const handleEndNum = (e) =>{
    return setEndNum(e.target.value)
  }

  const handleEndRua = (e) =>{
    return setEndRua(e.target.value)
  }

  const handleEndBairro = (e) =>{
    return setEndBairro(e.target.value)
  }
  
  const handleEndCidade = (e) =>{
    return setEndCidade(e.target.value)
  }
  const handleEndCep = (e) =>{
    return setEndCep(e.target.value)
  }

  const OnSubmit = (e) => {
    e.preventDefault();    
    const teste = {a_nome,image,end_aluno,end_num,end_rua,end_bairro,end_cidade,end_cep}
    const QS = qs.stringify(teste)
    console.log(QS)
    const url = 'http://localhost/delta/deltabackend/index.php/api/addAluno'
    const config = {
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     }
   }
    axios.post(url, QS, config)
   .then(function (response) {
     console.log(response);
   })
   .catch(function (error) {
     console.log(error);
   });      
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" style={{color: '#EB5160',}}>
          Cadastrar Aluno
        </Typography>
        <form className={classes.form} noValidate onSubmit={OnSubmit} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="a_nome"
                name="a_nome"
                variant="outlined"
                required
                fullWidth
                id="a_nome"
                label="Nome"
                autoFocus
                value={a_nome}
                onChange={handleNome}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Codigo do Aluno"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                id="end_aluno"
                name="end_aluno"
                onChange={handleEndAluno}                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Numero da casa"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                id="end_num"
                name="end_num"
                onChange={handleEndNum}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="end_rua"
                variant="outlined"
                required
                fullWidth
                id="end_rua"
                label="Rua"
                autoFocus
                onChange={handleEndRua}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="end_bairro"
                variant="outlined"
                required
                fullWidth
                id="end_bairro"
                label="Bairro"
                autoFocus
                onChange={handleEndBairro}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="end_cidade"
                variant="outlined"
                required
                fullWidth
                id="end_cidade"
                label="Cidade"
                autoFocus
                onChange={handleEndCidade}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="end_cep"
                variant="outlined"
                required
                fullWidth
                id="end_cep"
                label="Cep"
                autoFocus
                onChange={handleEndCep}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Avatar
                variant={'circle'}          
                className={classes.input}
                src={file}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input 
                type="file" 
                name={'image'}
                className={classes.avatar}
                onChange={upload}
              >                
              </input>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}            
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </Container>
  );
}
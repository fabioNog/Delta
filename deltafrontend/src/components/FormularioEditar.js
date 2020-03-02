import React, { useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';

//Axios import
import axios from 'axios';
import qs from 'qs'
import Avatar from '@material-ui/core/Avatar';

//React Router dom
import {useParams } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {    
    marginTop: theme.spacing(2),
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
}));

const estados = [
  {
    estado: 'ac',
  },
  {
    estado: 'al',
  },
  {
    estado: 'ap',
  },
  {
    estado: 'am',
  },
  {
    estado: 'ba',
  },
  {
    estado: 'ce',
  },
  {
    estado: 'df',
  },
  {
    estado: 'es',
  },
  {
    estado: 'go',
  },
  {
    estado: 'ma',
  },
  {
    estado: 'mg',
  },
  {
    estado: 'ms',
  },
  {
    estado: 'pa',
  },
  {
    estado: 'pb',
  },
  {
    estado: 'pr',
  },
  {
    estado: 'pe',
  },
  {
    estado: 'pi',
  },
  {
    estado: 'rj',
  },
  {
    estado: 'rn',
  },
  {
    estado: 'rs',
  },
  {
    estado: 'ro',
  },
  {
    estado: 'rr',
  },
  {
    estado: 'sc',
  },
  {
    estado: 'sp',
  },
  {
    estado: 'se',
  },
  {
    estado: 'to',
  },
];

export default function Editar() {
  const classes = useStyles();

  //Utilizando o parametro da minha url
  const {id} = useParams()
  
  //Status para endereço de aluno


  /*async function fetchMyAPI() {
    let response = await axios.get(`http://localhost/delta/deltabackend/index.php/api/alunobyid?id=${id}`, function(req, res, next){
      return res.sendStatus(200);
   })
   .then(res => setCurrencies(res.data))
   .catch(res => console.log('erro'))
  }*/

  async function getUser() {
    try {
      const response = await axios.get(`http://localhost/delta/deltabackend/index.php/api/alunobyid?id=${id}`);
      setCurrencies(response.data)
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() =>{
    getUser();
  },[])  

  
  
  const [currencies, setCurrencies] = useState([]);


  function teste(currencies){
    const nome = currencies.map(a => a.a_nome)[0];
    return nome;
  }
  

  //States do Aluno
  const [a_nome, setAnome] = useState(`${currencies.map(a => a.a_nome)[0]}`);
  const [image, setImage] = useState('');
  const [file, setFile] = useState('');

  //States do Endereco
  const [end_aluno, setEndAluno] = useState(0);
  const [end_num, setEndNum] = useState(0);
  const [end_rua, setEndRua] = useState('');
  const [end_bairro, setEndBairro] = useState('');
  const [end_cidade, setEndCidade] = useState('');
  const [end_estado, setEstado] = useState('');
  const [end_cep, setEndCep] = useState('');


  //Metodo upload Input
  const upload = e => {
    let files = e.target.files[0]
    setFile(URL.createObjectURL(files))
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = (e) => {
      setImage(e.target.result)
    }
  }

  const handleNome = (e) => {
    return setAnome(e.target.value)
  }

  const handleEndAluno = (e) => {
    return setEndAluno(e.target.value)
  }

  const handleEndNum = (e) => {
    return setEndNum(e.target.value)
  }

  const handleEndRua = (e) => {
    return setEndRua(e.target.value)
  }

  const handleEndBairro = (e) => {
    return setEndBairro(e.target.value)
  }

  const handleEndCidade = (e) => {
    return setEndCidade(e.target.value)
  }
  const handleEndEstado = (e) => {
    return setEstado(e.target.value)
  }
  const handleEndCep = (e) => {
    return setEndCep(e.target.value)
  }


  const OnSubmit = (e) => {
    e.preventDefault();          
    const data = {id,a_nome, image,end_num, end_rua, end_bairro, end_cidade, end_cep }        
    const QS = qs.stringify(data)
    console.log(QS)
    
    /*const url = 'http://localhost/delta/deltabackend/index.php/api/updateAluno'
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    axios.put(url, QS, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });*/
  }
  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" style={{ color: '#EB5160', }}>
          Editar Aluno
        </Typography>
        {currencies.map(aluno => (
        <form className={classes.form} noValidate onSubmit={OnSubmit} key={aluno.id} >        
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="a_nome"
                label="Nome"
                defaultValue = {aluno.a_nome}                
                helperText="Atualizar nome?"
                variant="outlined"
                name={"a_nome"}
                fullWidth
                onChange={handleNome}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Numero da casa"
                defaultValue={aluno.end_num}

                helperText="Atualizar numero da residência?"
                type="number"
                id="end_num"
                name="end_num"
                onChange={handleEndNum}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-select-currency"
                select
                variant="outlined"
                label="Select"
                value={end_estado =='' ? aluno.end_estado : end_estado}
                onChange={handleEndEstado}
                helperText="Alterar o Estado?"
              >
                {estados.map(option => (
                  <MenuItem key={option.estado} value={option.estado}>
                    {option.estado}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="end_rua"
                variant="outlined"
                defaultValue={aluno.end_rua}
                helperText="Atualizar nome da rua?"
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
                defaultValue={aluno.end_bairro}
                helperText="Atualizar nome do bairro?"
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
                defaultValue={aluno.end_cidade}
                helperText="Atualizar nome da cidade?"
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
                defaultValue={aluno.end_cep}
                helperText="Atualizar o cep?"
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
                src={file==''?aluno.image : file}
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
            Editar
          </Button>
        </form>
        ))}
      </div>
    </Container>
  );
}
import React, { useState, useEffect } from 'react';
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
import {useHistory} from  'react-router-dom';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
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

const currencies = [
  {
    end_estado: 'ac',
  },
  {
    end_estado: 'al',
  },
  {
    end_estado: 'ap',
  },
  {
    end_estado: 'am',
  },
  {
    end_estado: 'ba',
  },
  {
    end_estado: 'ce',
  },
  {
    end_estado: 'df',
  },
  {
    end_estado: 'es',
  },
  {
    end_estado: 'go',
  },
  {
    end_estado: 'ma',
  },
  {
    end_estado: 'mg',
  },
  {
    end_estado: 'ms',
  },
  {
    end_estado: 'pa',
  },
  {
    end_estado: 'pb',
  },
  {
    end_estado: 'pr',
  },
  {
    end_estado: 'pe',
  },
  {
    end_estado: 'pi',
  },
  {
    end_estado: 'rj',
  },
  {
    end_estado: 'rn',
  },
  {
    end_estado: 'rs',
  },
  {
    end_estado: 'ro',
  },
  {
    end_estado: 'rr',
  },
  {
    end_estado: 'sc',
  },
  {
    end_estado: 'sp',
  },
  {
    end_estado: 'se',
  },
  {
    end_estado: 'to',
  },
];

export default function Cadastrar() {
  const classes = useStyles();  

  //States do Aluno
  const [a_nome, setAnome] = useState('');
  const [image, setImage] = useState('');
  const [file, setFile] = useState('null');

  //States do Endereco
  const [end_num, setEndNum] = useState(0);
  const [end_rua, setEndRua] = useState('');
  const [end_bairro, setEndBairro] = useState('');
  const [end_cidade, setEndCidade] = useState('');
  const [end_estado, setEndEstado] = useState('');
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
    return setEndEstado(e.target.value)
  }

  const handleEndCep = (e) => {
    return setEndCep(e.target.value)
  }

  const history = useHistory()
  const OnSubmit = (e) => {
    e.preventDefault();
    const data = { a_nome, image, end_num, end_rua, end_bairro, end_cidade, end_estado,end_cep }
    const QS = qs.stringify(data)
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
        history.goBack();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" style={{ color: '#EB5160', }}>
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
            <Grid item xs={12} sm={6}>
              <TextField
                name="end_estado"
                variant="outlined"
                select
                value={end_estado}
                required
                fullWidth
                id="end_estado"
                label="Estado"
                autoFocus
                onChange={handleEndEstado}
              >
              {currencies.map(option => (
                <MenuItem key={option.end_estado} value={option.end_estado}>
                  {option.end_estado}
                </MenuItem>
              ))}
              </TextField>
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
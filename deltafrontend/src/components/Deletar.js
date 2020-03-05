import React, {useState,useEffect} from 'react';
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
import {useParams } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#EB5160',
  },
}));


export default function Deletar({match}) {
  const classes = useStyles();
  const {id} = useParams()
  const [name,setName] = useState('')
  
  async function getUser() {
    try {
      const response = await axios.get(`http://localhost/delta/deltabackend/index.php/api/alunobyid?id=${id}`);
      setName(response.data.map(a => a.a_nome))      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() =>{
    getUser();
  },[])

  const OnSubmit = (e) => {
    e.preventDefault();
    const data = {id}
    const QS = qs.stringify(data)
    console.log(QS)   
    const url = 'http://localhost/delta/deltabackend/index.php/api/deleteAluno'
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    axios.delete(url, QS, config)
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
        <Typography component="h1" variant="h6" style={{ color: '#EB5160', }}>
          Tem Certeza que deseja deletar {name}?
        </Typography>
        <form className={classes.form} noValidate onSubmit={OnSubmit} >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Deletar
          </Button>
        </form>
      </div>

    </Container>
  );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//Import Component Avatar

import Avatar from './Avatar'
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
}));

export default function Cadastrar() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" style={{color: '#EB5160',}}>
          Cadastrar Aluno
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="a_nome"
                variant="outlined"
                required
                fullWidth
                id="a_nome"
                label="Nome"
                autoFocus
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
                id="numero"
                name="numero"
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
              />
            </Grid>
            <Grid item xs={12}>
              <Avatar />
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
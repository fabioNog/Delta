import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Autorenew from '@material-ui/icons/Autorenew';
import Delete from '@material-ui/icons/Delete';
import House from '@material-ui/icons/House';
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';

//Importando tela de Dil
//Importando Axios
import axios from 'axios';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#EB5160',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost/delta/deltabackend/index.php/api/aluno', function(req, res, next){
            return res.sendStatus(200);
         })
        .then(res => setData(res.data))
        .catch(res => console.log('erro'))
    },[])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell>Endereço</StyledTableCell>
            <StyledTableCell>Foto</StyledTableCell>            
            <StyledTableCell>Atualizar</StyledTableCell>
            <StyledTableCell>Deletar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(aluno => (
            <StyledTableRow key={aluno.id}>
              <StyledTableCell>
                {aluno.a_nome}
              </StyledTableCell>
              <StyledTableCell>
                <Link to={`/infoendereco/${aluno.id}`}>
                  <ListItemIcon>
                    {<House/>}                                
                  </ListItemIcon>
                </Link>
              </StyledTableCell>
              <StyledTableCell>
                <Avatar
                  variant={'circle'}          
                  className={classes.input}
                  src={aluno.image}
                /></StyledTableCell>
              <StyledTableCell>
                <Link to={`/atualizar/${aluno.id}`}>
                  <ListItemIcon >
                    {<Autorenew/>}                                
                  </ListItemIcon>
                </Link>
              </StyledTableCell>
              <StyledTableCell>
                <Link to={`/deletar/${aluno.id}`}>
                  <ListItemIcon>
                    {<Delete/>}                                
                  </ListItemIcon>
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

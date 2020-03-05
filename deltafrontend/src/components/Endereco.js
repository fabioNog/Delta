import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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


const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function CustomizedTables(id) {
  const classes = useStyles();
  
  const [data, setData] = useState([]);
  
  useEffect(() =>{             
    axios.get(`http://localhost/delta/deltabackend/index.php/api/alunobyid?id=${id.number.id}`, function(req, res, next){
        return res.sendStatus(200);
     })
    .then(res => setData(res.data))
    .catch(res => console.log('erro'))
  })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Aluno</StyledTableCell>
            <StyledTableCell>Numero</StyledTableCell>
            <StyledTableCell>Rua</StyledTableCell>            
            <StyledTableCell>Bairro</StyledTableCell>
            <StyledTableCell>Cidade</StyledTableCell>
            <StyledTableCell>Estado</StyledTableCell>
            <StyledTableCell>Cep</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.a_nome}</StyledTableCell>
              <StyledTableCell>{row.end_num}</StyledTableCell>
              <StyledTableCell>{row.end_rua}</StyledTableCell>
              <StyledTableCell>{row.end_bairro}</StyledTableCell>
              <StyledTableCell>{row.end_cidade}</StyledTableCell>
              <StyledTableCell>{row.end_estado}</StyledTableCell>
              <StyledTableCell>{row.end_cep}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

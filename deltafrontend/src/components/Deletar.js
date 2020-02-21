import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Teste = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost/delta/deltabackend/index.php/api/aluno', function(req, res, next){
            return res.sendStatus(200);
         })
        .then(res => console.log(res))
        .catch(res => console.log('erro'))
    },[])
    return <h1>Sou um Teste</h1>
}

export default Teste
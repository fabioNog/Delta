import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Imports das minhas paginas
import Main from "../pages/Main";
import Adicionar from "../pages/Adicionar";
import Deletar from "../pages/Deletar";
import Atualizar from "../pages/Atualizar";
import InfoEndereco from "../pages/InfoEndereco";



const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/adicionar" component={Adicionar} />
            <Route path="/deletar/:id" component={Deletar} />
            <Route path="/atualizar/:id" component={Atualizar} />
            <Route path="/infoendereco/:id" component={InfoEndereco} />
        </Switch>
    </Router>
);

export default Routes;
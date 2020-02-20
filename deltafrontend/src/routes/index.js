import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Imports das minhas paginas
import Main from "../pages/Main";
import Adicionar from "../pages/Adionar";


const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/adicionar" component={Adicionar} />
        </Switch>
    </Router>
);

export default Routes;
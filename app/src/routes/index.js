import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/perfil/:user+" component={Perfil} />
  </Switch>
);

export default Routes;
import React from 'react';
//import logo from './logo.svg';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from './containers/home/home';
import Register from './containers/register/register';
import Cita from './containers/citas/citas';

import './App.css';

function App() {
  return (
    
      <BrowserRouter>
        
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/register' component={Register} exact/>
          <Route path='/citas' component={Cita} exact/>
        </Switch>
        
      </BrowserRouter>
    
  );
}

export default App;

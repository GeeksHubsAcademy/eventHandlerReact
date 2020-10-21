import React from 'react';
//import logo from './logo.svg';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Register from './containers/register/register';

import './App.css';

function App() {
  return (
    
      <BrowserRouter>
        
        <Switch>
          <Route path='/register' component={Register} exact/>
        </Switch>
        
      </BrowserRouter>
    
  );
}

export default App;

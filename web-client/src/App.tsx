import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom"

import './App.css';
import Homepage from './components/homepage';
import LoginPage from './components/loginpage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={ Homepage }>
            </Route>
            <Route path="/login" component= { LoginPage }>

            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

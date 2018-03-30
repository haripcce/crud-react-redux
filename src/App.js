import React, { Component } from 'react';
//import {Match} from 'react-router';
import { Link, Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import GamesPage from './GamesPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Link to="/games" >Games</Link>

        </p>
        <Switch>
        
        <Route path="/games" component={GamesPage} />
       
      </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
//import {Match} from 'react-router';
import { NavLink, Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import GamesPage from './GamesPage';
import GameFormPage from './GameFormPage';
import GameCard from './GameCard';

class App extends Component {
  render() {
    return (
      <div className="App">
       
       <div className="ui container">
         <div className="ui three item menu">
           <NavLink className="item" activeClassName="active" exact to="/">Home</NavLink>
           <NavLink className="item" activeClassName="active" exact to="/games">Games</NavLink>
           <NavLink className="item" activeClassName="active" exact to="/games/new">Add New Game</NavLink>
         </div>  
       </div>
       
        <Switch>
          <Route path="/games/new" component={GameFormPage} />
          <Route path="/game/:_id" component={GameFormPage} />
          <Route path="/games" component={GamesPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

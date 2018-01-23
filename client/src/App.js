import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'

class App extends Component {
  // state = {
  //   gardens: [{
  //     name: "J's GArden",
  //     users: [{
  //         name: "J-Dawg",
  //         plants: [{
  //           name: "idk plants",
  //           type: "uh... red?"
  //         }]
  //     }]
  //   }]
  // }
  
  render() {
    // const gardensComponent = <Gardens gardens={this.state.gardens} />
    // const plantsComponent = <Plants plants={this.state.gardens.users.plants} />
    return (
      <Router>
        <Switch>
          <HomePage />
          {/* <Route exact path='/' component={HomePage} />
          <Route path='/gardens' render={gardensComponent} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;

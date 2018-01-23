import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import GardensPage from './components/GardensPage'
// import GardenPage from './components/GardenPage'

class App extends Component {

  render() {
    // const gardensComponent = <Gardens gardens={this.state.gardens} 
    // getAllGardens={this.getAllGardens} />
    // const plantsComponent = <Plants plants={this.state.gardens.users.plants} />
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/gardens' component={GardensPage} />
          {/* <Route path='/gardens/:gardenId' component={GardenPage} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;

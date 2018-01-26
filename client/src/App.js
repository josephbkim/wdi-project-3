import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import GardensPage from './components/GardensPage'
import UsersList from './components/UsersList'
import PlantsList from './components/PlantsList'

class App extends Component {

  render() {
    const Header = styled.header`
    background-color: #66BB6A;
    height: 50px;
    text-align: center;
    vertical-align:center;
    `

    return (
      <div>
        <Header>
          Garden Share
        </Header>

        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/gardens' component={GardensPage} />
            <Route exact path='/gardens/:gardenId/users' component={UsersList} />
            <Route exact path='/gardens/:gardenId/users/:userId/plants' component={PlantsList} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

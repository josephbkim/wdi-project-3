import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components';
import HomePage from './components/HomePage'
import GardensPage from './components/GardensPage'
import UsersList from './components/UsersList'
import PlantsPage from './components/PlantsPage'

class App extends Component {

  render() {
    const Header = styled.header`
    /* background-color: #EBF5E8; */
    text-align: center;
    vertical-align:center;
    `

    return (
      <SiteBackground>
        <Header>
          Garden Share
        </Header>

        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/gardens' component={GardensPage} />
            {/* <Route exact path="/gardens/newGarden" render={NewGarden}/> */}
            <Route exact path='/gardens/:gardenId/users' component={UsersList} />
            <Route exact path='/gardens/:gardenId/users/:userId/plants' component={PlantsPage} />
          </Switch>
        </Router>
      </SiteBackground>
    );
  }
}

export default App;

const SiteBackground = styled.body`
  background-color: #EBF5E8;
`

/* injectGlobal`
  div {
  padding-left: 10px;
  
}
` */
import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components';
import HomePage from './components/HomePage'
import GardensPage from './components/GardensPage'
import UsersList from './components/UsersList'
import PlantsPage from './components/PlantsPage'
import Weather from './components/Weather'
// import TitleLogo from './public/colors_plantapp_logo.png'

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
          <div>
            <LogoImg src={require('./colors_plantapp_logo.png')} alt="" />
          </div>
        </Header>

        <Router>
          <Switch>
            <Body>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/gardens' component={GardensPage} />
              <Route exact path='/weather' component={Weather} />
              {/* <Route exact path="/gardens/newGarden" render={NewGarden}/> */}
              <Route exact path='/gardens/:gardenId/users' component={UsersList} />
              <Route exact path='/gardens/:gardenId/users/:userId/plants' component={PlantsPage} />
            </Body>

          </Switch>
        </Router>
      </SiteBackground>
    );
  }
}

export default App;

const SiteBackground = styled.div`
  background-color: #EBF5E8;
`

/* injectGlobal`
  div {
  padding-left: 10px;
  
}
` */

const LogoImg = styled.img`
  height: 170px;
  
`

const Body = styled.body`
padding-left: 40px;
`
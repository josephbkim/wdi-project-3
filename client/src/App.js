import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <div>
          <h1>Hello from App.js</h1>
          <HomePage />
      </div>
    );
  }
}

export default App;

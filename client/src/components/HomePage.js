import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import GardensPage from './GardensPage'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <GardensPage />
            </div>
        );
    }
}

export default HomePage;

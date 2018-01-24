import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import '../App.css';
import styled from 'styled-components'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <Link to={`/gardens`}>Go to Gardens</Link>
            </div>
        )
    }
}

export default HomePage;

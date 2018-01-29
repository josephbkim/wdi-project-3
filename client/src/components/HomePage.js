import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import styled from 'styled-components'

class HomePage extends Component {
    render() {
        return (
            <div>
                <BackgroundDiv>
                <Link to={`/gardens`}>Go to Gardens</Link>
                </BackgroundDiv>
            </div>
        )
    }
}

export default HomePage;

const BackgroundDiv = styled.div`
    height: 800px;
    background-image: url('https://cdn.onlinewebfonts.com/svg/img_35711.png');
`
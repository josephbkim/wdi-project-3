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
                    <ImageContainer>

                        <HomepageImage src='https://cdn.onlinewebfonts.com/svg/img_35711.png' alt='garden-hand' />
                        <HomepageImage src='https://d30y9cdsu7xlg0.cloudfront.net/png/308785-200.png' alt='flowers' />
                        <HomepageImage src='https://cdn3.iconfinder.com/data/icons/gardening-icons/512/Leafs-512.png' alt='garden-hand' />
                    </ImageContainer>
                </BackgroundDiv>
            </div>
        )
    }
}

export default HomePage;

const BackgroundDiv = styled.div`
    height: 800px;
    width: 100%;
    /* background-image: url('https://cdn.onlinewebfonts.com/svg/img_35711.png');
    background-repeat: no-repeat;
    background-position: center; */
`

const HomepageImage = styled.img`
    width: 200px;
`

const ImageContainer = styled.div`
    /* display: flex; */

`
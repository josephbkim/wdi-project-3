import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import styled from 'styled-components'

class HomePage extends Component {
    render() {
        return (
            <div>
                <BackgroundDiv>

                    <ImageContainer>
                        <Link to={`/gardens`}>
                            <HomepageImage src='https://cdn.onlinewebfonts.com/svg/img_35711.png' alt='garden-hand' />
                            {/* <HomepageImage src='https://d30y9cdsu7xlg0.cloudfront.net/png/308785-200.png' alt='flowers' />
                        <HomepageImage src='http://www.pvhc.net/img209/khfvchtrrhwakwzlafnr.png' alt='garden-hand' /> */}
                        <SplashText>FIND YOUR GARDEN</SplashText>
                        </Link>
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
    width: 300px;
    height: 180px;
    border-radius: 5px;
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-right: 20px;


`

const SplashText = styled.div`
    color: #571B0D;
    &:hover {
        color: #6B983F;
    }
`
import React, { Component } from 'react'
import '../App.css'
import styled from 'styled-components'

const GardenDetail = (props) => {

    return (
        <GardenDiv>
            <div>{props.garden.name}</div>
            <div>{props.garden.description}</div>
            <div>Address:</div>
            <div>{props.garden.address}</div>
            <div>{props.garden.city}, {props.garden.state}</div>
            <div>Number of Gardeners: {props.userCount}</div>
            <div>Number of Available: {10 - props.userCount}</div>
            <div>Cost of Plot: </div>
        </GardenDiv>
    );
}

export default GardenDetail


const GardenDiv = styled.div`
border: 5px solid black;
border-radius: 5px;
margin: 20px;
padding: 20px;
width: 40%;

`
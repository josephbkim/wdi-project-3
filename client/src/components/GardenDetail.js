import React from 'react'
import '../App.css'
import styled from 'styled-components'
// import GoTrashcan from react-icons/lib/go/trashcan

const GardenDetail = (props) => {

    return (
        <GardenDiv>
            <div>{props.garden.name}</div>
            <div>Description: {props.garden.description}</div>
            <div>Address:</div>
            <div>{props.garden.address}</div>
            <div>{props.garden.city}, {props.garden.state}</div>
            <div>Number of Gardeners: {props.userCount}</div>
            <div>Number of Available Plots:
                {Number(props.garden.totalNumberOfPlots) - Number(props.userCount)}
            </div>
            <div>Cost of Plot: </div>
        </GardenDiv>
    );
}

export default GardenDetail


const GardenDiv = styled.div`
color: #6b983f;
border-radius: 5px;
margin: 20px;
padding: 20px;
width: 40%;

`
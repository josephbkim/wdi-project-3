import React from 'react'
import '../App.css'
import styled from 'styled-components'

// import GoTrashcan from react-icons/lib/go/trashcan

const GardenDetail = (props) => {

    return (
            <GardenDiv>
                <NameDiv>{props.garden.name}</NameDiv>
                <div>{props.garden.description}</div>
                <br />
                <BoldDiv>Address:</BoldDiv>
                <div>{props.garden.address}</div>
                <div>{props.garden.city}, {props.garden.state}</div>
                <div><BoldSpan>Number of Gardeners: </BoldSpan> {props.userCount}</div>
                <div><BoldSpan>Number of Available Plots: </BoldSpan>
                    {Number(props.garden.totalNumberOfPlots) - Number(props.userCount)}
                </div>
                <div><BoldSpan>Yearly Fee:</BoldSpan> $ {props.garden.costOfPlot}</div>
            </GardenDiv>

    );
}

export default GardenDetail

const GardenDiv = styled.div`
    
    color: #6b983f;
    border-radius: 5px;
    margin: 0;
    
    max-width: 350px;
    margin-bottom: 50px;
`
const NameDiv = styled.div`
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 20px;
`
const BoldDiv = styled.div`
    font-weight: bold;
`
const BoldSpan = styled.span`
    font-weight: bold;
`



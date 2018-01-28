import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
// import PlantsList from './PlantsList'

class PlantsPage extends Component {
    state = {
        user: {}
    }

    componentWillMount = () => {
        this.getAllPlants()
    }

    getAllPlants = async () => {
        try {
            const gardenId = this.props.match.params.gardenId
            const userId = this.props.match.params.userId
            const response = await axios.get(`/api/gardens/${gardenId}/users/${userId}/plants`)
            this.setState({ user: response.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {

        let plantsList = []
        if (this.state.user && this.state.user.plants) {
            plantsList = this.state.user.plants.map((plant, index) => {
                return <Plant key={index}>
                    <div>{plant.name}</div>
                    <div>Number of Plants: {plant.quantity}</div>
                    <div>{plant.sunlightNeeded}</div>
                </Plant>
            })
        }

        return (
            <div>

                <div>Hello from Plants Page</div>
                <PlantList>
                    {plantsList}

                </PlantList>
                <Link to={`/gardens/${this.props.match.params.gardenId}/users`}>
                    <Button>
                        Back to Users
                    </Button>
                </Link >

            </div>


        )
    }

}

export default PlantsPage

const PlantList = styled.div`
    background-color: #bfd964;
    border-radius: 5px;
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
`

const Plant = styled.div`
    border: 8px #571B0D solid; 
    width: 180px; 
    height: 180px;
    margin: 20px;
    padding: 10px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        border: 8px #6B983F solid;
        color: #571B0D;
    }
`

const Button = styled.button`
border-radius: 5px;
background-color: #6B983F;
color: #bfd964;
border-radius: 5px;
padding: 5px;
margin: 8px;
`
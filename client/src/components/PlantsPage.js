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
        
        const PlantList = styled.div`
        border: 5px solid brown;
        border-radius: 5px;
        margin: 20px;
        padding: 20px;
        `
        
        let plantsList = []
        if(this.state.user && this.state.user.plants) {
            plantsList = this.state.user.plants.map((plant, index) => {
                return <div key={index}>
                            <div>{plant.name}</div>
                            <div>Number of Plants: {plant.quantity}</div>
                            <div>{plant.sunlightNeeded}</div>
                            {/* <div>{}</div>
                            <div>{}</div> */}
                        </div>
            })
        }

        return (
            <div>

                <div>Hello from Plants Page</div>
                <PlantList>
                    {plantsList}

                </PlantList>

            </div>

        )
    }

}

export default PlantsPage
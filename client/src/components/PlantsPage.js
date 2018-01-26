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
        // const plantsList = this.state.user.plants.map((plant, index) => {
        //     return <div>{plants.name}</div>
        const plantsList = ['test', 'test2'].map((user, index) => {
            return <div>{user}</div>
        })


        return (
            <div>

                <div>Hello from Plants Page</div>
                <div>{plantsList}</div>

            </div>



        )
    }

}

export default PlantsPage
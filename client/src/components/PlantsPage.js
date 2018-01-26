import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

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



        return (
            <div>

                <div>Hello from Plants Page</div>

            </div>



        )
    }

}

export default PlantsPage
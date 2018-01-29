import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Weather from './Weather'
import NewPlantForm from './NewPlantForm'
import GoTrashcan from 'react-icons/lib/go/trashcan'

class PlantsPage extends Component {
    state = {
        user: {},
        plant: {
            name: '',
            quantity: '',
            sunlightNeeded: ''
        }
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

    handlePlantChange = (event) => {
        event.preventDefault()
        const plant = { ...this.state.user }
        plant[event.target.name] = event.target.name
        this.setState({
            plant
        })

    }

    createNewPlant = async (event) => {
        event.preventDefault()
        const gardenId = this.props.match.params.gardenId
        const userId = this.props.match.params.userId
        const payload = {
            name: this.state.plant.name,
            plant: this.state.plant.quantity
        }
        const blankForm = {
            name: '',
            plant: ''
        }
        await axios.post(`/api/gardens/${this.state.gardenId}/users/${userId}/plants`, payload)
        await this.getAllUsers()
        this.setState({
            addFormShowing: false,
            user: blankForm
        })
    }

    deletePlant = async (plant) => {
        try {
            const gardenId = this.props.match.params.gardenId
            const userId = this.props.match.params.userId
            axios.delete(`/api/gardens/${gardenId}/users/${userId}/plants/${plant._id}`)
            window.location.reload()
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {

        let plantsList = []
        if (this.state.user && this.state.user.plants) {
            plantsList = this.state.user.plants.map((plant, index) => {
                return <div>
                            <Plant key={index}>
                                <div>{plant.quantity} {plant.name}</div>
                            </Plant>
                            <TrashIcon type="submit" onClick={() => this.deletePlant(plant)}><GoTrashcan /> </TrashIcon>
                        </div>
            })
        }

        return (
            <div>
                <Weather />

                <UserTitle>{this.state.user.firstName}'s Plants</UserTitle>
                <Email><BoldSpan>E-mail: </BoldSpan>{this.state.user.email}</Email>
                <PlantList>
                    {plantsList}

                </PlantList>
                <Link to={`/gardens/${this.props.match.params.gardenId}/users`}>
                    <Button>
                        Back to Users
                    </Button>
                </Link >
                {/* <NewPlantForm 
                    createNewPlant={this.createNewPlant}
                    handlePlantChange={this.handlePlantChange}
                    plant={this.state.plant}
                    /> */}

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
const UserTitle = styled.h5`
    padding-left: 20px;
`

const Email = styled.div`
    font-size: 16px;
    padding-left: 20px;
`

const BoldSpan = styled.span`
    font-weight: bold;
`

const TrashIcon = styled.div`
    font-size: 16px;
    color: #6b983f;
    width: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
    &:hover {
        color: #571B0D;
}
`
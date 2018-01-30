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
        const plant = { ...this.state.plant }
        plant[event.target.name] = event.target.value
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
            plant: this.state.plant.quantity,
            sunlightNeeded: this.state.sunlightNeeded
        }
        const blankForm = {
            name: '',
            plant: '',
            sunlightNeeded: ''
        }
        await axios.post(`/api/gardens/${gardenId}/users/${userId}/plants`, payload)
        await this.getAllPlants()
        this.setState({
            addFormShowing: false,
            plant: blankForm
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
                        <div>{plant.quantity}</div>
                        <div>{plant.name}</div>
                    </Plant>
                    <TrashIcon type="submit" onClick={() => this.deletePlant(plant)}><GoTrashcan /> </TrashIcon>
                </div>
            })
        }

        return (
            <div>
                <Weather />

                <UserTitle>{this.state.user.firstName} {this.state.user.lastName}'s Plants</UserTitle>
                <Email><BoldSpan>E-mail: </BoldSpan>{this.state.user.email}</Email>
                <PlantList>
                    {plantsList}

                </PlantList>
                <Link to={`/gardens/${this.props.match.params.gardenId}/users`}>
                    <Button>
                        Back to Users
                    </Button>
                </Link >
                <NewPlantForm
                    createNewPlant={this.createNewPlant}
                    handlePlantChange={this.handlePlantChange}
                    plant={this.state.plant}
                />

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
    @media (max-width: 700px) {
        padding: 0 16px;
        
    }
`

const Plant = styled.div`
    border: 8px #571B0D solid; 
    width: 180px; 
    height: 180px;
    margin: 30px 20px 20px 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 50%;
    &:hover {
        border: 8px #6B983F solid;
        color: #571B0D;
    }
    @media (max-width: 700px) {
    width: 100px;
    height: 100px;
    margin: 25px 10px 0px 10px;
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
    padding-bottom: 10px;
    color: #6b983f;
    width: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
    &:hover {
        color: #571B0D;
}
`
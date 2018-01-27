import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Button } from 'react-materialize'
import SubmitButton from './SubmitButton'
import GoTrashcan from 'react-icons/lib/go/trashcan'
import NewGarden from './NewGarden';

class GardensPage extends Component {
    state = {
        gardens: [],
        garden: {
            name: '',
            address: '',
            city: '',
            state: ''
        }
    }

    componentWillMount = () => {
        this.getAllGardens()
    }

    async getAllGardens() {
        try {
            const response = await axios.get('/api/gardens')
            const gardens = response.data
            this.setState({ gardens: gardens })
        }

        catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        const garden = { ...this.state.garden }
        garden[event.target.name] = event.target.value
        this.setState({ garden })
    }

    deleteGarden = async (garden) => {
        try {
            axios.delete(`/api/gardens/${garden._id}`)
            const indexToDelete = this.state.gardens.indexOf(garden)
            const newGardens = [...this.state.gardens]
            newGardens.splice(indexToDelete, 1)
            this.setState({ gardens: newGardens })
        }
        catch (err) {
            console.log(err)
        }
    }

    createGarden = async (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.garden.name,
            address: this.state.garden.address,
            city: this.state.garden.city,
            state: this.state.garden.state
        }
        const blankForm = {
            name: '',
            address: '',
            city: '',
            state: ''
        }

        await axios.post('/api/gardens', payload)
        await this.getAllGardens()
        this.setState({ garden: blankForm })
    }




    render() {

        const gardensList = this.state.gardens.map((garden, index) => {
            return (<div key={index}><Link to={`/gardens/${garden._id}/users`}>{garden.name}</Link>
                <Span type="submit" onClick={() => this.deleteGarden(garden)}><GoTrashcan /> </Span>
            </div>)
        })

        const newFormStyle = {
            border: '5px solid green',
            backgroundColor: '#BEEE62',
            width: 300,
            fontSize: 14,
            padding: 20
        }

        return (
            <div>
                <h3>Gardens</h3>
                <div>
                    {gardensList}
                </div>
                <div>
                    <NewGarden gardensList={gardensList} createGarden={this.createGarden}
                        handleChange={this.handleChange} garden={this.state.garden} />
                </div>
            </div>
        )
    }
}

export default GardensPage

const Span = styled.span`
    padding-left: 5px;
    `


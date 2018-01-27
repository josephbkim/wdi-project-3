import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import GardenDetail from './GardenDetail'
import GardenEdit from './GardenEdit'

class UsersList extends Component {
    state = {
        garden: {
            users: []
        },
        user: '',
        redirect: false
    }

    componentWillMount = () => {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        try {
            console.log('getting users')
            const gardenId = this.props.match.params.gardenId
            const response = await axios.get(`/api/gardens/${gardenId}/users`)
            this.setState({ garden: response.data })
        }
        catch (err) {
            console.log(`Catch errror ----- ${err}`)
        }
    }

    handleChange = (event) => {
        console.log("Handle Change Method")
        event.preventDefault()
        const garden = { ...this.state.garden }
        garden[event.target.name] = event.target.value
        console.log("Updated Garden:", garden)
        this.setState({ garden })
    }

    // deleteGarden = async (garden) => {
    //     console.log("Deleting!")
    //     await axios.delete(`/api/gardens/${garden._id}`)
    //     // const gardenIndexToDelete = this.state.garden
    // }

    updateGarden = async (event) => {
        event.preventDefault()
        console.log("Updating Garden in DB")
        try {
            event.preventDefault()
            console.log("this is updating to this garden:", this.state.garden.name)
            const response = await axios.patch(`/api/gardens/${this.state.garden._id}`, this.state.garden)
            this.setState({
                garden: response.data,
                redirect: true
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {

        // if (this.state.redirect) {
        //     <Redirect to={`/gardens`} />
        // }

        const garden = this.state.garden
        const userCount = this.state.garden.users.length

        return (
            <div>


                <GardenDetail
                    garden={this.state.garden}
                    userCount={userCount}
                />

                <UserListContainer>
                    {
                        garden.users.map((user, index) => {
                            return (<div className='userContainer' key={index}>

                                <Link to={`/gardens/${garden._id}/users/${user._id}/plants`}>
                                    <UserContainer>
                                        <UserNameColor>{user.firstName}</UserNameColor>
                                    </UserContainer>
                                </Link>
                                <PlantTypeCount>Types of Plants: {user.plants.length}</PlantTypeCount>

                            </div>)
                        })
                    }
                </UserListContainer>


                {
                    <Link to={`/gardens`}>
                        <Button>
                            Back to Gardens
                        </Button>
                    </Link>
                }


                <Button onClick={this.deleteGarden}>
                    Delete {garden.name}
                </Button>
                <div>
                    <GardenEdit updateGarden={this.updateGarden} garden={this.state.garden}
                        handleChange={this.handleChange} redirect={this.state.redirect} />
                </div>

            </div>
        )
    }
}

export default UsersList

// ======== STYLED COMPONENTS ==========
const UserListContainer = styled.div`
    background-color: #bfd964;
    border-radius: 5px;
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    `

const Button = styled.button`
    border-radius: 5px;
    background-color: #6B983F;
    color: #bfd964;
    border-radius: 5px;
    padding: 5px;
    margin: 8px;
    `

const UserContainer = styled.div`
    border: 8px #571B0D solid; 
    width: 150px; 
    height: 150px;
    margin: 20px;
    padding: 10px;
    border-radius: 2px;
    `

const newFormStyle = {
    border: '5px solid green',
    backgroundColor: '#BEEE62',
    width: 300,
    fontSize: 14,
    padding: 20
}

const UserNameColor = styled.span`
    color: #6B983F;
    text-transform: uppercase;
`
const PlantTypeCount = styled.div`
    color: #571B0D;
    text-align: center;
`
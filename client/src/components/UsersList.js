import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import GardenDetail from './GardenDetail'
import GardenEdit from './GardenEdit'

class UsersList extends Component {
    state = {
        garden: {
            users: []
        },
        user: ''
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

    // deleteGarden = async (garden) => {
    //     console.log("Deleting!")
    //     await axios.delete(`/api/gardens/${garden._id}`)
    //     // const gardenIndexToDelete = this.state.garden
    // }

    updateGarden = async (garden) => {
        try {
            await axios.patch(`/api/gardens/${garden._id}`, garden)
        } catch (err) {

            console.log(err)
        }
    }

    render() {


        const garden = this.state.garden
        const userCount = this.state.garden.users.length

        // ======== STYLED COMPONENTS ==========
        const UserListContainer = styled.div`
        border: 5px solid brown;
        border-radius: 5px;
        margin: 20px;
        padding: 20px;
        `
        const Button = styled.button`
        border: 5px solid red;
        border-radius: 5px;
        color: white:
        border-radius: 5px;
        `

        const UserContainer = styled.div`
        border: 3px green solid;     

        `

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
                                <UserContainer>
                                    <Link to={`/gardens/${garden._id}/users/${user._id}/plants`}>{user.firstName}</Link>
                                    <div>Different Types of Plants: {user.plants.length}</div>
                                </UserContainer>
                                <div>{user.email}</div>
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
                    <GardenEdit updateGarden={this.updateGarden} garden={this.state.garden}/> 
                </div>
                
            </div >
        )
    }
}

export default UsersList
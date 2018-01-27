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

        if (this.state.redirect) {
            <Redirect to={`/gardens`} />
        }

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
                                <UserContainer>
                                    <Link to={`/gardens/${garden._id}/users/${user._id}/plants`}>{user.firstName}</Link>
                                    <div>Different Types of Plants: {user.plants.length}</div>
                                </UserContainer>
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
                    <GardenEdit updateGarden={this.updateGarden} garden={this.state.garden} handleChange={this.handleChange} />
                </div>

            </div>
        )
    }
}

export default UsersList

// ======== STYLED COMPONENTS ==========
const UserListContainer = styled.div`
    background-color: #BEEE62;
    border-radius: 5px;
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    `
    
const Button = styled.button`
    border: 5px solid red;
    border-radius: 5px;
    color: black;
    border-radius: 5px;
    `

const UserContainer = styled.div`
    border: 8px #966F33 solid; 
    backround-color: #C8A165;
    color: white;
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
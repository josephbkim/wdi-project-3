import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import GardenDetail from './GardenDetail'

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



    render() {
        const garden = this.state.garden
        const userCount = this.state.garden.users.length

        // ======== STYLED COMPONENTS ==========
        const GardenDiv = styled.div`
        border: 5px solid black;
        border-radius: 5px;
        margin: 20px;
        padding: 20px;
        
        `
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


                {/* {<Link to={`/api/gardens/${garden._id}`}> */}
                <Button onClick={this.deleteGarden}>
                    Delete {garden.name}
                </Button>
                {/* </Link>} */}
            </div >
        )
    }
}

export default UsersList
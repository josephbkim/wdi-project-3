import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

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
        const deleteGarden = this.props.deleteGarden
        console.log(`DELETE GARDEN----- ${deleteGarden}`)
        const garden = this.state.garden
        const gardenId = this.state.garden._id
        const userList = this.state.garden.users.map((user, index) => {
            return (<div key={index}>
                <div>
                    <Link to={`/gardens/${gardenId}/users/${user._id}`}>{user.firstName}</Link>
                </div>
                <div>{user.email}</div>
            </div>)
        })
        const userCount = this.state.garden.users.length
        // ======== STYLED COMPONENTS ==========
        const GardenDiv = styled.div`
        border: 5px solid black;
        border-radius: 5px;
        margin: 20px;
        padding: 20px;
        
        `
        const UserList = styled.div`
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

        return (
            <div>
                <GardenDiv className='garden-detail'>
                    <div>{this.state.garden.name}</div>
                    <div>Address:</div>
                    <div>{this.state.garden.address}</div>
                    <div>{this.state.garden.city}, {this.state.garden.state}</div>
                    <div>Number of Gardeners: {userCount}</div>
                    <div>Number of Available: {10 - userCount}</div>
                    <div>Cost of Plot: </div>
                </GardenDiv>
                <UserList>
                    {userList}
                </UserList>
                {<Link to={`/gardens`}>
                    <Button>
                        Back to Gardens
                    </Button>
                </Link>}


                {/* {<Link to={`/api/gardens/${garden._id}`}> */}
                    <Button onClick={deleteGarden}>
                        Delete {garden.name}
                    </Button>
                {/* </Link>} */}


            </div >
        )
    }
}

export default UsersList
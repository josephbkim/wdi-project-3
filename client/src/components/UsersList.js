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



    render() {
        
        const gardenId = this.state.garden._id
        const userList = this.state.garden.users.map((user, index) => {
                return (<div key={index}>
                    <div>
                        <Link to={`/gardens/${gardenId}/users/${user._id}`}>{user.firstName}</Link>
                    </div>
                    <div>{user.email}</div>
                        </div>)
        })

        return (
            <div>
                <div>{this.state.garden.name}</div>
                <div>{this.state.garden.address}</div>
                <div>{userList}</div>
            </div>
        )
    }
}

export default UsersList
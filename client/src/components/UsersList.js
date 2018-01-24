import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

class UsersList extends Component {
    state = {
        users: []
    }

    getAllUsers = () => {
        
    }



    render() {
    //     const userList = this.state.users.map((user, index) => {
    //         return (<div>test</div>)
        // })
        
        return (
            <div>

                <div>Hello from Users Page</div>
                
                
            </div>
        )
    }
}

export default UsersList
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Gardens extends Component {

    getAllGardens = () => {
        axios.get('localhost:4000/api/users').then(res => {
            this.setState({ gardens: res.data })
        })
    }
    render() {
        return (
            <div>
                <h1>Gardens</h1>
                {this.state.gardens.map(garden => {
                    return <div>{`/user/${garden._id}`}>{garden.name}</div>
                })}
            </div>
        )
    }
}
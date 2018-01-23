import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class GardensPage extends Component {
    // state = {
    //     gardens: []
    // }

    // componentWillMount = () => {

    // }

    // getAllGardens = () => {
    //     axios.get('localhost:4000/api/users').then(res => {
    //         this.setState({ gardens: res.data })
    //     })
    // }

    render() {
        return (
            <div>
                <h3>Gardens</h3>
                {/* {this.state.gardens.map(garden => {
                    return <div>{`/garden/${garden._id}`}>{garden.name}</div>
                })} */}
            </div>
        )
    }
}

export default GardensPage


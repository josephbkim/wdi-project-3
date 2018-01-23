import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class GardensPage extends Component {
    state = {
        gardens: []
    }

    componentWillMount = () => {
        this.getAllGardens()
    }

    getAllGardens = () => {
        console.log('GET ALL GARDENS!!!!!')
        axios.get('/api/gardens').then(res => {
            this.setState({ gardens: res.data })
        })
    }

    render() {

        // const gardensList = this.state.gardens.map((garden) => {
        //     return (<div>tt</div>)
        // })
        return (
            <div>
                <h3>Gardens</h3>
                <div>
                {this.state.gardens.map(garden => {
                    // return (<div>{`/gardens/${garden._id}`}>{garden.name}</div>)
                    return (<div>salsa</div>)
                })}
                </div>
            </div>
        )
    }
}

export default GardensPage


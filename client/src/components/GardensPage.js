import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class GardensPage extends Component {
    state = {
        gardens: []
    }

    componentWillMount = () => {
        this.getAllGardens()
    }

    async getAllGardens() {
        console.log('GET ALL GARDENS!!!!!')
        try{
            const res = await axios.get('/api/gardens')
            const gardens = res.data
            this.setState({ gardens: res.data })
        }
        catch(err) {
            console.log(err)
        }
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
                    return (<div><Link to={`/gardens/${garden._id}`}>{garden.name}</Link></div>)
                })}
                </div>
            </div>
        )
    }
}

export default GardensPage


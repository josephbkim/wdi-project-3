import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

class PlantsList extends Component {
    state = {
        plants: []
    }

    // getAllPlants = () => {
    //     axios.get('api/')
    // }

    render() {

        
        return (
            <div>

                <div>Hello from Plants Page</div>

            </div>



        )
    }

}

export default PlantsList
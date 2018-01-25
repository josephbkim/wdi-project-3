import React, { Component } from 'react'
import styled from 'styled-components'
import SubmitButton from './SubmitButton'

class GardenEdit extends Component {
    render() {
        return (
            <div>
                <h3>Gardens</h3>
                <form onSubmit={() => this.props.updateGarden(this.props.garden)}>
                    <div>
                        <label htmlFor="name">Garden Name</label>
                        <input onChange={this.props.handleChange} name="name" type="text" value={this.props.garden.name} />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input onChange={this.props.handleChange} name="address" type="text" value={this.props.garden.address} />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input onChange={this.props.handleChange} name="city" type="text" value={this.props.garden.city} />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input onChange={this.props.handleChange} name="state" type="text" value={this.props.garden.state} />
                    </div>
                    <div>
                        <SubmitButton />
                    </div>

                </form>
            </div>
        )
    }
}

export default GardenEdit
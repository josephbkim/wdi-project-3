import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class GardensPage extends Component {
    state = {
        gardens: [],
        garden: {
            name: '',
            address: '',
            city: '',
            state: ''
        }
    }

    componentWillMount = () => {
        this.getAllGardens()
    }

    async getAllGardens() {
        try {
            const res = await axios.get('/api/gardens')
            const gardens = res.data
            this.setState({ gardens: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        const garden = {...this.state.garden}
        garden[event.target.name] = event.target.value
        this.setState({garden})

    }


    createGarden = async (event) => {
            event.preventDefault()
            const payload = {
                name: this.state.garden.name,
                address: this.state.garden.address,
                city: this.state.garden.address,
                state: this.state.garden.state
            }
            const newForm = {
                name: '',
                address: '',
                city: '',
                state: ''
            }
            
            await axios.post('/api/gardens', payload)
            await this.getAllGardens()
            this.setState({garden: newForm})

            // const newGarden = response.data
            // const newGardens = [...this.state.gardens]
            // newGardens.push(newGarden)
            // this.setState({ gardens: newGardens })
    }

    render() {

        const gardensList = this.state.gardens.map((garden, index) => {
            return (<div key={index}><Link to={`/gardens/${garden._id}`}>{garden.name}</Link></div>)
        })

        return (
            <div>
                <h3>Gardens</h3>
                <div>
                    {gardensList}
                </div>

                <div className='new-item-form'>
                    <form onSubmit={this.createGarden}>
                        <div>
                            <label htmlFor="name">Garden Name</label>
                            <input onChange={this.handleChange} name="name" type="text" value={this.state.garden.name} />
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                            <input onChange={this.handleChange} name="address" type="text" value={this.state.garden.address} />
                        </div>
                        <div>
                            <label htmlFor="city">City</label>
                            <input onChange={this.handleChange} name="city" type="text" value={this.state.garden.city} />
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                            <input onChange={this.handleChange} name="state" type="text" value={this.state.garden.state} />
                        </div>
                        <div>
                            <input value="Add Garden" type="submit" />
                        </div>

                    </form>
                </div>


            </div>
        )
    }
}

export default GardensPage


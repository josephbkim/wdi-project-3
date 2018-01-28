import React, { Component } from "react"
import axios from 'axios'

class Weather extends Component {
    state = {
        city: '',
        state: ''
    }
    componentWillMount = () => {
        // this.getHistoricalWeather() 
    }
    getHistoricalWeather = async () => {
        const response = await axios.get('https://api.weatherbit.io/v2.0/history/daily', {
            params: {
                api_key: 'ab01c5618f2446f8a8b7efe555e0da4e',
                city: 'Atlanta',
                state: 'GA', 
                start_date: '2018-01-25',
                end_date: '2018-01-26', 
            }
        })
        console.log(response.data.precip + ' - mms')
    }

    getCurrentWeather = async () => {
        const response = await axios.get('https://api.weatherbit.io/v2.0/current', {
            params: {
                api_key: 'ab01c5618f2446f8a8b7efe555e0da4e',
                city: 'Atlanta',
                state: 'GA', 
                start_date: '2018-01-25',
                end_date: '2018-01-26', 
            }
        })
    }
    render() {
        return (

            <div>hello from weather api</div>
        )
    }

}

export default Weather
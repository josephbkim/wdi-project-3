import React, { Component } from "react"
import axios from 'axios'

class Weather extends Component {
    state = {
        city: '',
        state: '',
        precip_i: '',
        temp: ''
    }
    componentWillMount = () => {
        this.getCurrentWeather()
    }
    getHistoricalWeather = async () => {

    }

    getCurrentWeather = async () => {
        const weather = await axios.get('/api/weather/current')
        const weatherToday = weather.data.current_observation
        console.log(weatherToday)
        this.setState({
            precip_i: weatherToday.precip_today_string,
            temp: weatherToday.temperature_string
        })
    }


    render() {
        return (

            <div>
                <div></div>
                <div>
                    Today's Rainfall: {this.state.precip_i}
                </div>
                <div>
                    Current Temperature: {this.state.temp}
                </div>


            </div>
        )
    }

}

export default Weather
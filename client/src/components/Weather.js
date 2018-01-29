import React, { Component } from "react"
import axios from 'axios'
import styled from 'styled-components'

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

            <WeatherDiv>
                <div>
                    Today's Rainfall: <WeatherSpan>{this.state.precip_i}</WeatherSpan>
                </div>
                <div>
                    Current Temperature:<WeatherSpan> {this.state.temp}</WeatherSpan>
                </div>


            </WeatherDiv>
        )
    }

}

export default Weather

const WeatherDiv = styled.div`
    color: #571B0D;
    padding: 15px;   
    font-size: 22px;
    background-color: #A7DDE6;
    margin: 0 20px;
    max-width: 450px;
    border-radius: 5px;
`
const WeatherSpan = styled.span`
    color: #6B983F;

`

import React, { Component } from "react"
import axios from 'axios'
import styled from 'styled-components'
import WeatherExtended from './WeatherExtended.js'

class Weather extends Component {
    state = {
        city: '',
        state: '',
        precip_i: '',
        temp: '',
        wind_mph: '',
        relative_humidity: '',
        dewpoint_string: '',
        icon_url: '',
        weatherExtendedShowing: false
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
            temp: weatherToday.temperature_string,
            relative_humidity: weatherToday.relative_humidity,
            feelslike_f: weatherToday.feelslike_f,
            wind_mph: weatherToday.wind_mph,
            dewpoint_string: weatherToday.dewpoint_string,
            icon_url: weatherToday.icon_url,
            weatherExtendedShowing: weatherToday.weatherExtendedShowing
        })
    }

    toggleAdditionalWeatherDetail = () => {
        const weatherExtendedShowing = !this.state.weatherExtendedShowing
        this.setState({ weatherExtendedShowing })
    }


    render() {

        const moreOrLess = (this.state.weatherExtendedShowing) ? 'less' : 'more'

        return (

            <WeatherDiv>
                <div>
                    Today's Rainfall: <WeatherSpan>{this.state.precip_i}</WeatherSpan>
                </div>
                <div>
                    Current Temperature:<WeatherSpan> {this.state.temp}</WeatherSpan>
                </div>
                <div>
                    {
                        this.state.weatherExtendedShowing ?
                            <div>
                                <WeatherExtended
                                    relative_humidity={this.state.relative_humidity}
                                    feelslike_f={this.state.feelslike_f}
                                    dewpoint_string={this.state.dewpoint_string}
                                    wind_mph={this.state.wind_mph}
                                    icon_url={this.state.icon_url}
                                />
                            </div>
                            : null
                    }
                </div>
                <ShowMore onClick={this.toggleAdditionalWeatherDetail}>
                    show {moreOrLess} details...

                </ShowMore>

            </WeatherDiv>
        )
    }

}

export default Weather

const WeatherDiv = styled.div`
    color: #571B0D;
    padding: 15px;   
    font-size: 18px;
    background-color: #A7DDE6;
    margin: 15px 20px 45px 20px;
    max-width: 450px;
    border-radius: 5px;
`
const WeatherSpan = styled.span`
    color: #6B983F;

`

const ShowMore = styled.button`
    font-size: 14px;
    text-align: right;
`

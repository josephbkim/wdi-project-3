import React, { Component } from "react"
import styled from 'styled-components'

class WeatherExtended extends Component {

    render(){
        return (
            <div>
                <div>It feels like: <WeatherSpan> {this.props.feelslike_f} degrees </WeatherSpan></div>
                <div>Relative humidity:<WeatherSpan> {this.props.relative_humidity}</WeatherSpan></div>
                
                <div>Dewpoint: <WeatherSpan>{this.props.dewpoint_string}</WeatherSpan></div>
                <div>Wind: <WeatherSpan>{this.props.wind_mph} MPH</WeatherSpan></div>
                <div><img src={this.props.icon_url} /></div>
                
            </div>
        )
    }
}

export default WeatherExtended

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
import React, { Component } from 'react'
import './App.css'
import Coast from './Coast@2x.png'
import wavewise from './wavewise-logo@2x.png'

class App extends Component {
  constructor () {
    super()
    this.state = {
      locations: {
        SouthWrightsville: [{
          swell: {
            units: 'ft',
            components: {
              combined: {
                height: 1.1,
                period: 14,
                compassDirection: 'E'
              }
            }
          },
          wind: {
            speed: 10,
            compassDirection: 'W'
          }
        }],
        SurfCity: [{
          swell: {
            units: 'ft',
            components: {
              combined: {
                height: 1.1,
                period: 14,
                compassDirection: 'E'
              }
            }
          },
          wind: {
            speed: 10,
            compassDirection: 'W'
          }
        }] }
    }
  }

  render () {
    return (
      <div className='body'>
        <div className='container'>
          <h1 className='header'><img src={wavewise} />Wave<strong>Wise</strong></h1>
          <img className='nc-photo' src={Coast} />
          <div className='more-info-link'>
            {this.state.locations.SurfCity.map((status, i) =>
              <div>
                <p>The wind is {status.wind.speed} from {status.wind.compassDirection}</p>
                <p>The surf is {status.swell.components.combined.height}ft at {status.swell.components.combined.period} seconds</p></div>)}
          </div>
        </div>
      </div>
    )
  }
}

export default App

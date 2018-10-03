import React, { Component } from 'react'
import CoastSVG from './assets/CoastSVG'

import wavewise from './assets/wavewise-logo_0.5x.png'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      locations: props.locations
    }
  }

  render () {
    return (
      <div className='container'>
        <h1 className='header'><img className='logo' src={wavewise} />Wave<strong>Wise</strong></h1>
        <CoastSVG className='coastline' />
        <div className='more-info-link'>
          {this.props.locations.SurfCity.map((status, i) =>
            <div className='suggestion-body'>
              <p>The wind is {status.wind.speed}mph from the {status.wind.compassDirection}</p>
              <p>The surf is {status.swell.components.combined.height}ft at {status.swell.components.combined.period} seconds</p>
            </div>)}
        </div>
      </div>
    )
  }
}

export default Home

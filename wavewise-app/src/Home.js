import React, { Component } from 'react'
import CoastSVG from './assets/CoastSVG'

import wavewise from './assets/wavewise-logo_0.5x.png'

class Home extends Component {
  render () {
    const { bestSpot } = this.props
    return (
      <div className='container'>
        <h1 className='header'><img className='logo'
          alt='Sorry Surfer - Not Found'
          src={wavewise} />Wave<strong>Wise</strong></h1>
        <CoastSVG className='coastline' />
        <div className='surf-suggestion'>
          <h3 className='suggestion'>Go surf {bestSpot.spot_name}!</h3>
          <p>The surf is {bestSpot.swell_height_ft}ft at {bestSpot.swell_period_s} seconds.</p>
          <p>The wind is {bestSpot.wind_direction} at {bestSpot.wind_speed_mph} mph</p>
        </div>
        <div className='more-info-link'>
          <h4>Check out the surrounding conditions</h4>
        </div>
      </div>
    )
  }
}

export default Home

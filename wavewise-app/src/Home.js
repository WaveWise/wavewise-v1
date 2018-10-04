import React, { Component } from 'react'
import CoastSVG from './assets/CoastSVG'

import wavewise from './assets/wavewise-logo_0.5x.png'
import SurfCityPin from './assets/SurfCityPin'
import NEpin from './assets/NEpin'
import SEpin from './assets/SEpin'
import CBpin from './assets/CBpin'

class Home extends Component {
  render () {
    const { bestSpot } = this.props
    return (
      <div className='container'>
        <h1 className='header'><img className='logo'
          alt='Sorry, Surfer - Not Found'
          src={wavewise} />Wave<strong>Wise</strong></h1>
        <CoastSVG className='coastline' />
        <SurfCityPin className='surf-city-pin' />
        <NEpin className='NE-pin' />
        <SEpin className='SE-pin' />
        <CBpin className='CB-pin' />
        <div className='surf-suggestion'>
          <h3 className='suggestion'>Go surf at {bestSpot.spot_name}!</h3>
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

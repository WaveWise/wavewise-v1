import React, { Component } from 'react'
// import CoastSVG from './assets/CoastSVG'
import image from './assets/map_invert.png'

import wavewise from './assets/wavewise-logo_0.5x.png'
import SimpleMenu from './SimpleMenu'

class Home extends Component {
  constructor (props) {
    super()
  }
  isEmpty (obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) { return false } else { return true }
    }
  }

  render () {
    const { bestSpot } = this.props
    const bestSpotEmpty = this.isEmpty(bestSpot)
    return (
      <div className='container'>
        <h1 className='header'><img className='logo'
          alt='Sorry Surfer - Not Found'
          src={wavewise} />Wave<strong className='wise'>Wise</strong></h1>
        <img className='coastline' src={image} alt='Not Found' />
        {!bestSpotEmpty
          ? <div className='surf-suggestion'>
            <h3 className='suggestion'>Surf now at {bestSpot.spot_name}!</h3>
            <p className='surf-condition'>The surf is {bestSpot.swell_height_ft}ft at {bestSpot.swell_period_s} seconds.</p>
            <p className='overview-conditions'>The wind is {bestSpot.wind_direction} at {bestSpot.wind_speed_mph} mph</p>
          </div>
          : <div /> }
        <div className='footer'>
          <SimpleMenu spots={this.props.spots} />
          <p>Check out other spots</p>
        </div>
      </div>
    )
  }
}

export default Home

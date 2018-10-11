import React, { Component } from 'react'
import { Link } from '@reach/router'

import CBimage from './map_gifs/CB.gif'
import SCimage from './map_gifs/SC.gif'
import WbNeimage from './map_gifs/WB_NE.gif'
import WbSeimage from './map_gifs/WB_SE.gif'
import wavewise from './assets/wavewise-logo_0.5x.png'
import BottomDrawer from './BottomDrawer'

class Home extends Component {
  constructor (props) {
    super()
  }

  render () {
    const { bestSpot } = this.props
    return (
      <div className='container'>
        <h1 className='header'><img className='logo'
          alt='Sorry Surfer - Not Found'
          src={wavewise} />Wave<strong className='wise'>Wise</strong></h1>
        <div className='surf-suggestion'>
          <h3 className='suggestion'>Surf now at {bestSpot.spot_name}!</h3>
        </div>
        {bestSpot.spot_name === 'Wrightsville Beach - South End'
          ? <Link
            to={`/spots/${bestSpot.spot_name}/${bestSpot.tide_type}/${bestSpot.tide_time}/${bestSpot.swell_direction}/${bestSpot.swell_height_ft}/${bestSpot.swell_period_s}/${bestSpot.wind_speed_mph}/${bestSpot.wind_direction}/${bestSpot.spot_id}/${bestSpot.rating}`}
          >
            <img className='coastline'
              src={WbSeimage}
              alt='Not Found'
            />
          </Link>
          : <div />}
        {bestSpot.spot_name === 'Wrightsville Beach - North End'
          ? <Link
            to={`/spots/${bestSpot.spot_name}/${bestSpot.tide_type}/${bestSpot.tide_time}/${bestSpot.swell_direction}/${bestSpot.swell_height_ft}/${bestSpot.swell_period_s}/${bestSpot.wind_speed_mph}/${bestSpot.wind_direction}/${bestSpot.spot_id}/${bestSpot.rating}`}
          >
            <img className='coastline'
              src={WbNeimage}
              alt='Not Found'
            />
          </Link>
          : <div />}
        {bestSpot.spot_name === 'Carolina Beach'
          ? <Link
            to={`/spots/${bestSpot.spot_name}/${bestSpot.tide_type}/${bestSpot.tide_time}/${bestSpot.swell_direction}/${bestSpot.swell_height_ft}/${bestSpot.swell_period_s}/${bestSpot.wind_speed_mph}/${bestSpot.wind_direction}/${bestSpot.spot_id}/${bestSpot.rating}`}
          >
            <img className='coastline'
              src={CBimage}
              alt='Not Found'
            />
          </Link>
          : <div />}
        {bestSpot.spot_name === 'Surf City'
          ? <Link
            to={`/spots/${bestSpot.spot_name}/${bestSpot.tide_type}/${bestSpot.tide_time}/${bestSpot.swell_direction}/${bestSpot.swell_height_ft}/${bestSpot.swell_period_s}/${bestSpot.wind_speed_mph}/${bestSpot.wind_direction}/${bestSpot.spot_id}/${bestSpot.rating}`}
          >
            <img className='coastline'
              src={SCimage}
              alt='Not Found'
            />
          </Link>
          : <div />}
        <p className='surf-condition'>The surf is {bestSpot.swell_height_ft}ft at {bestSpot.swell_period_s} seconds.</p>
        <p className='overview-conditions'>The wind is {bestSpot.wind_direction} at {bestSpot.wind_speed_mph} mph</p>
        <div className='footer'>
          <BottomDrawer spots={this.props.spots} />
          <p>Check out other spots</p>
        </div>
      </div>
    )
  }
}

export default Home

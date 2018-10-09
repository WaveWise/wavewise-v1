import React, { Component } from 'react'
import './SpotCondition.css'

import Menu from './Menu'
import highTide from './assets/highTide.svg'
import direction from './assets/direction.svg'
import swellHeight from './assets/swellHeight.svg'
import swellPeriod from './assets/swellPeriod.svg'
import windSpeed from './assets/windSpeed.svg'
import windDirection from './assets/windDirection.svg'
import SimpleMenu from './assets/SimpleMenu';

class SpotCondition extends Component {
  render () {
    let { name, tide, swelldir, height, period, windspeed, winddir } = this.props
    return (
      <React.Fragment>
        <SimpleMenu spots={this.props.spots} />
        <h2 className='single-spot-header'>{name}</h2>
        <div className='spot-info-container'>
          <div className='box spot-tide'>
            {/* <h4>Tide</h4> */}
            <img className='condition-icon' src={highTide} alt='not found' />
            <p>tide: <strong>{tide}</strong></p>
          </div>
          <div className='box spot-swell-direction'>
            {/* <h4>Swell Direction</h4> */}
            <img className='condition-icon' src={direction} alt='not found' />
            <p>swell direction: <strong>{swelldir}</strong></p>
          </div>
          <div className='box spot-swell-height'>
            <img className='condition-icon' src={swellHeight} alt='not found' />
            <p>swell height: <strong>{height}</strong> ft</p>
          </div>
          <div className='box spot-swell-period'>
            <img className='condition-icon' src={swellPeriod} alt='not found' />
            <p>swell period: <strong>{period}</strong> seconds</p>
          </div>
          <div className='box spot-wind-speed'>
            <img className='condition-icon' src={windSpeed} alt='not found' />
            <p>windspeed: <strong>{windspeed}</strong> mph</p>
          </div>
          <div className='box spot-wind-direction'>
            <img className='condition-icon' src={windDirection} alt='not found' />
            <p>wind direction: <strong>{winddir}</strong></p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SpotCondition

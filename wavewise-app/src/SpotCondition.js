import React, { Component } from 'react'
import './SpotCondition.css'

import Menu from './Menu'
import hightTide from './assets/highTide.svg'
import direction from './assets/direction.svg'
import swellHeight from './assets/swellHeight.svg'
import swellPeriod from './assets/swellPeriod.svg'
import windSpeed from './assets/windSpeed.svg'
import windDirection from './assets/windDirection.svg'

class SpotCondition extends Component {
  render () {
    let { name, tide, swelldir, height, period, windspeed, winddir } = this.props
    console.log(tide)
    return (
      <React.Fragment>
        <div className='menu'>
          <Menu spots={this.props.spots} />
        </div>
        <div className='spotCondition-body'>
          <h2 className='single-spot-header'>{name}</h2>
          <div className='spot-info-container'>
            <div className='box spot-tide'>
              <h4>Tide</h4>
              <img className='condition-icon' src={hightTide} alt='not found' />
              <p>{tide}</p>
            </div>
            <div className='box spot-swell-direction'>
              <h4>Swell Direction</h4>
              <img className='condition-icon' src={direction} alt='not found' />
              <p>{swelldir}</p>
            </div>
            <div className='box spot-swell-height'>
              <img className='condition-icon' src={swellHeight} alt='not found' />
              <p>{height} ft</p>
            </div>
            <div className='box spot-swell-period'>
              <img className='condition-icon' src={swellPeriod} alt='not found' />
              <p>{period} seconds</p>
            </div>
            <div className='box spot-wind-speed'>
              <img className='condition-icon' src={windSpeed} alt='not found' />
              <p>{windspeed} mph</p>
            </div>
            <div className='box spot-wind-direction'>
              <img className='condition-icon' src={windDirection} alt='not found' />
              <p>{winddir}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SpotCondition

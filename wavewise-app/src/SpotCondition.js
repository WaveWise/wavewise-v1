import React, { Component } from 'react'
import './SpotCondition.css'
import { Link } from '@reach/router'
import Menu from './Menu'

class SpotCondition extends Component {
  render () {
    return (
      <React.Fragment>
        <Menu spots={this.props.spots} />
        <h2 className='single-spot-header'>{this.props.spots.SurfCity.spot_name}</h2>
        <div className='spot-info-container'>
          <div className='box spot-tide'>
            <h4>Tide</h4>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{this.props.spots.SurfCity.tide}</p>
          </div>
          <div className='box spot-swell-direction'>
            <h4>Swell Direction</h4>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{this.props.spots.SurfCity.swell_direction}</p>
          </div>
          <div className='box spot-swell-height'>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{this.props.spots.SurfCity.swell_height_ft} ft</p>
          </div>
          <div className='box spot-swell-period'>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{this.props.spots.SurfCity.swell_period_s} seconds</p>
          </div>
          <div className='box spot-wind-speed'>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{this.props.spots.SurfCity.wind_speed_mph} mph</p>
          </div>
          <div className='box spot-wind-direction'>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{this.props.spots.SurfCity.wind_direction}</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SpotCondition

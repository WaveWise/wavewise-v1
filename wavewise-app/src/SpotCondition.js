import React, { Component } from 'react'

class SpotCondition extends Component {
  render () {
    return (
      <div className='spot-info-container'>
        <h2 className='single-spot-header'>{this.props.SurfCity.spot_name}</h2>
        <div className='box spot-tide'>
          <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
          <p>{this.props.SurfCity.tide}</p>
        </div>
        <div className='box spot-swell-direction'>
          <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
          <p>{this.props.SurfCity.swell_direction}</p>
        </div>
        <div className='box spot-swell-period'>
          <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
          <p>{this.props.SurfCity.swell_period_s} seconds</p>
        </div>
        <div className='box spot-swell-height'>
          <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
          <p>{this.props.SurfCity.swell_height_ft} ft</p>
        </div>
        <div className='box spot-wind-speed'>
          <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
          <p>{this.props.SurfCity.wind_speed_mph} mph</p>
        </div>
        <div className='box spot-wind-direction'>
          <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
          <p>{this.props.SurfCity.wind_direction}</p>
        </div>
      </div>
    )
  }
}

export default SpotCondition

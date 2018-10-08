import React, { Component } from 'react'
import './SpotCondition.css'
import { Link } from '@reach/router'
import Menu from './Menu'

class SpotCondition extends Component {
  render () {
    let { name, tide, swelldir, height, period, windspeed, winddir } = this.props
    return (
      <React.Fragment>
        <Menu spots={this.props.spots} />
        <h2 className='single-spot-header'>{name}</h2>
        <div className='spot-info-container'>
          <div className='box spot-tide'>
            <h4>Tide</h4>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{tide}</p>
          </div>
          <div className='box spot-swell-direction'>
            <h4>Swell Direction</h4>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{swelldir}</p>
          </div>
          <div className='box spot-swell-height'>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{height} ft</p>
          </div>
          <div className='box spot-swell-period'>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{period} seconds</p>
          </div>
          <div className='box spot-wind-speed'>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{windspeed} mph</p>
          </div>
          <div className='box spot-wind-direction'>
            <img className='condition-icon' src={`https://placebear.com/60/60`} alt='not found' />
            <p>{winddir}</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SpotCondition

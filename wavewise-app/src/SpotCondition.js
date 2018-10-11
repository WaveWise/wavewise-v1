import React, { Component } from 'react'
import './SpotCondition.css'

// import Menu from './Menu'
import highTide from './assets/highTide.svg'
import lowTide from './assets/lowTide.svg'
import direction from './assets/direction.svg'
import swellHeight from './assets/swellHeight.svg'
import swellPeriod from './assets/swellPeriod.svg'
import windSpeed from './assets/windSpeed.svg'
import windDirection from './assets/windDirection.svg'
import Rating from './Rating'
import TopDrawer from './TopDrawer'

class SpotCondition extends Component {
  render () {
    let { name, tide, tidetime, swelldir, height, period, windspeed, winddir, id, rating, updateConditions } = this.props
    console.log(tide)
    return (
      <React.Fragment>
        <TopDrawer spots={this.props.spots} />
        <h2 className='single-spot-header'>{name}</h2>
        <div className='spot-info-container'>
          <div className='box spot-tide'>
            {tide === 'LOW'
              ? <img className='condition-icon' src={lowTide} alt='not found' />
              : <img className='condition-icon' src={highTide} alt='not found' />}
            <p>tide: <strong>{tide} at {tidetime}</strong></p>
          </div>
          <div className='box spot-swell-direction'>
            {/* <h4>Swell Direction</h4> */}
            <img className='condition-icon' src={direction} alt='not found' />
            <p className='spotData'>swell direction: <strong>{swelldir}</strong></p>
          </div>
          <div className='box spot-swell-height'>
            <img className='condition-icon' src={swellHeight} alt='not found' />
            <p className='spotData'>swell height: <strong>{height}</strong> ft</p>
          </div>
          <div className='box spot-swell-period'>
            <img className='condition-icon' src={swellPeriod} alt='not found' />
            <p className='spotData'>swell period: <strong>{period}</strong> seconds</p>
          </div>
          <div className='box spot-wind-speed'>
            <img className='condition-icon' src={windSpeed} alt='not found' />
            <p className='spotData'>windspeed: <strong>{windspeed}</strong> mph</p>
          </div>
          <div className='box spot-wind-direction'>
            <img className='condition-icon' src={windDirection} alt='not found' />
            <p className='spotData'>wind direction: <strong>{winddir}</strong></p>
          </div>
        </div>
        <Rating spotId={id}
          period={period}
          height={height}
          swelldir={swelldir}
          windspeed={windspeed}
          winddir={winddir}
          tide={tide}
          tidetime={tidetime}
          liveRating={rating}
          currentUser={this.props.currentUser}
          updateConditions={updateConditions} />
      </React.Fragment>
    )
  }
}

export default SpotCondition

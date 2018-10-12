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
  constructor () {
    super()
    this.state = {
      showRating: true
    }
  }
  render () {
    let { name, tide, tidetime, swelldir, height, period, windspeed, winddir, id, rating } = this.props
    return (
      <React.Fragment>
        <div className='menu-test'><TopDrawer align='left' className='top-drawer' spots={this.props.spots} /></div>
        <h2 className='single-spot-header'>{name}</h2>
        <div className='spot-info-container'>
          <div className='box spot-tide'>
            <p className='spotData'>tide</p>
            {tide === 'LOW'
              ? <img className='condition-icon' src={lowTide} alt='not found' />
              : <img className='condition-icon' src={highTide} alt='not found' />}
            <strong>{tide} at {tidetime}</strong>
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
        <div>
          {this.state.showRating
            ? <Rating spotId={id}
              period={period}
              height={height}
              swelldir={swelldir}
              windspeed={windspeed}
              winddir={winddir}
              tide={tide}
              tidetime={tidetime}
              liveRating={rating}
              currentUser={this.props.currentUser} />
            : <div />
          }
        </div>
      </React.Fragment>
    )
  }
}

export default SpotCondition

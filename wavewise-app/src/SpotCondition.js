import React, { Component } from 'react'
import data from './data'
import './SpotCondition.css'

import highTide from './assets/highTide.svg'
import lowTide from './assets/lowTide.svg'
import direction from './assets/direction.svg'
import swellHeight from './assets/swellHeight.svg'
import swellPeriod from './assets/swellPeriod.svg'
import windSpeed from './assets/windSpeed.svg'
import windDirection from './assets/windDirection.svg'
import Rating from './Rating'
import BottomDrawer1 from './BottomDrawer1'

class SpotCondition extends Component {
  constructor () {
    super()
    this.state = {
      showRating: true
    }
  }

  componentDidMount () {
    data.checkUserReviewHistory(this.props.currentUser)
      .then(res => {
        if (res.body === 'ok') {
          console.log('Ok good job')
          this.props.resetRating()
        } else if (res.body === 'forbidden') {
          this.props.hideRating()
        }
      })
  }

  render () {
    let { name, tide, tidetime, swelldir, height, period, windspeed, winddir, id, rating } = this.props
    return (
      <React.Fragment>
        <div className='spot-condition-body'>
          <h2 className='single-spot-header'>{name}</h2>
          <div className='spot-info-container'>
            <div className='box spot-tide'>
              {tide === 'LOW'
                ? <img className='condition-icon' src={lowTide} alt='not found' />
                : <img className='condition-icon' src={highTide} alt='not found' />}
              <p className='tideSpotData'> {tide} {tidetime} </p>
              <p className='data-label'>tide</p>
            </div>
            <div className='box spot-swell-direction'>
              <img className='condition-icon' src={direction} alt='not found' />
              <p className='spotData'> <strong>{swelldir}</strong></p>
              <p className='data-label'>swell dir</p>
            </div>
            <div className='box spot-swell-height'>
              <img className='condition-icon' src={swellHeight} alt='not found' />
              <p className='spotData'><strong>{height}</strong> ft</p>
              <p className='data-label'> swell ht</p>
            </div>
            <div className='box spot-swell-period'>
              <img className='condition-icon' src={swellPeriod} alt='not found' />
              <p className='spotData'> <strong>{period}</strong> s</p>
              <p className='data-label'>swell per</p>
            </div>
            <div className='box spot-wind-speed'>
              <img className='condition-icon' src={windSpeed} alt='not found' />
              <p className='spotData'> <strong>{windspeed}</strong> mph</p>
              <p className='data-label'>windspeed</p>
            </div>
            <div className='box spot-wind-direction'>
              <img className='condition-icon' src={windDirection} alt='not found' />
              <p className='spotData'> <strong>{winddir}</strong></p>
              <p className='data-label'>wind dir</p>
            </div>
          </div>
          <div className='rating-container'>
            {this.props.showRating
              ? <Rating spotId={id}
                period={period}
                height={height}
                swelldir={swelldir}
                windspeed={windspeed}
                winddir={winddir}
                tide={tide}
                tidetime={tidetime}
                liveRating={rating}
                currentUser={this.props.currentUser}
                hideRating={this.props.hideRating}
              />
              : <div>
                <h4>You may vote once per hour.</h4>
              </div>}
          </div>
          <div className='bottom-drawer-container'>
            <BottomDrawer1 className='bottom-wave-menu' spots={this.props.spots} style={{ textDecoration: 'none', color: '#EBF5EE' }} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SpotCondition

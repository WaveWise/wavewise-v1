import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import photo from './assets/thanks.png'

import data from './data'

const styles = {
  smallIcon: {
    width: 20,
    height: 20
  },
  mediumIcon: {
    width: 48,
    height: 48
  },
  largeIcon: {
    width: 60,
    height: 60
  },
  small: {
    width: 40,
    height: 40,
    padding: 16
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24
  },
  large: {
    width: 120,
    height: 120,
    padding: 30
  }
}

class Rating extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reviewSent: false,
      showing: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    data.postReview({ condition_rating: {
      spot_id: this.props.spotId,
      user: this.props.currentUser,
      rating: e.currentTarget.value,
      condition_swell_period_s: this.props.period,
      condition_swell_height_ft: this.props.height,
      condition_swell_direction: this.props.swelldir,
      condition_wind_speed_mph: this.props.windspeed,
      condition_wind_direction: this.props.winddir,
      condition_tide_type: this.props.tide,
      condition_tide_time: this.props.tidetime } })
    this.setState({
      reviewSent: true
    })
  }

  render () {
    return (
      <div className='rating-body'>
        {this.state.reviewSent
          ? null
          : <div className='rating-container'>
            <div className='thumbs-icon up'>
              <IconButton className='thumb' onClick={(e) => this.handleClick(e)} value='1' style={{ color: '#EBF5EE' }} iconStyle={styles.smallIcon}
              ><ThumbUp iconstyle={styles.smallIcon}
                  style={styles.small} /></IconButton>
            </div>
            <div className='thumbs-icon down'>
              <IconButton className='thumb' onClick={(e) => this.handleClick(e)} value='-1' style={{ color: '#EBF5EE' }}> <ThumbDown iconStyle={styles.smallIcon}
                style={styles.small} /> </IconButton>
            </div>
          </div>}
        {this.state.reviewSent
          ? <div className='review-response'>
            <div className='clear'>
              <button onClick={(e) => this.props.hideRating(e)} className='clear-button'>X</button>
            </div>
            <div>
              <p>Thanks!</p>
              <img className='thanks-pic'src={photo} alt='thanks!' />
            </div>
            <p>We'll log your response for future condition rating</p>
          </div>
          : <p>Tell us how it is</p>}
      </div>
    )
  }
}

export default Rating

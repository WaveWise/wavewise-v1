import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'

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
      hidden: true,
      reviewSent: false,
      ratingObject: { condition_rating: {
        spot_id: this.props.spotId,
        user: this.props.currentUser,
        rating: null,
        condition_swell_period_s: this.props.period,
        condition_swell_height_ft: this.props.height,
        condition_swell_direction: this.props.swelldir,
        condition_wind_speed_mph: this.props.windspeed,
        condition_wind_direction: this.props.winddir,
        condition_tide_type: this.props.tide,
        condition_tide_time: this.props.tidetime
      }
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate () {
    if (this.state.ratingObject.rating !== null && !this.state.reviewSent) {
      data.postReview(this.state.ratingObject).then(() => this.setState({ reviewSent: true }))
    }
  }

  handleClick (e) {
    this.setState({
      ratingObject: { condition_rating: {
        spot_id: this.props.spotId,
        user: this.props.currentUser,
        rating: e.currentTarget.value,
        condition_swell_period_s: this.props.period,
        condition_swell_height_ft: this.props.height,
        condition_swell_direction: this.props.swelldir,
        condition_wind_speed_mph: this.props.windspeed,
        condition_wind_direction: this.props.winddir,
        condition_tide_type: this.props.tide,
        condition_tide_time: this.props.tidetime
      }
      }
    })
  }

  render () {
    console.log(this.props.currentUser)
    console.log(this.state.ratingObject.rating)
    return (
      <div className='rating-body'>
        <div className='rating-container'>
          <div className='thumbs-icon up'>
            <IconButton className='thumb' onClick={(e) => this.handleClick(e)} value='1' style={{ color: '#EBF5EE' }} iconStyle={styles.smallIcon}
            > <ThumbUp iconStyle={styles.smallIcon}
                style={styles.small} /></IconButton>
          </div>
          <p className='rating-prompt'>How were the waves?</p>
          <div className='thumbs-icon down'>
            <IconButton className='thumb' onClick={(e) => this.handleClick(e)} value='-1' style={{ color: '#EBF5EE' }}> <ThumbDown iconStyle={styles.smallIcon}
              style={styles.small} /> </IconButton>
          </div>
        </div>

      </div>
    )
  }
}

export default Rating

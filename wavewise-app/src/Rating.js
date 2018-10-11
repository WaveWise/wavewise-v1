import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'

import data from './data'

class Rating extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hidden: true,
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
    if (this.state.ratingObject.rating !== null) {
      data.postReview(this.state.ratingObject)
    }
    console.log(this.state.ratingObject)
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
    return (
      <div className='rating-body'>
        <div className='rating-container'>
          <div className='thumbs-icon up'>
            <IconButton onClick={(e) => this.handleClick(e)} value='1'> <ThumbUp /></IconButton>
          </div>
          <div className='thumbs-icon down'>
            <IconButton onClick={(e) => this.handleClick(e)} value='-1'> <ThumbDown /> </IconButton>
          </div>
        </div>
        <p>Tell us how it is</p>
      </div>
    )
  }
}

export default Rating

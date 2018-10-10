import React, { Component } from 'react'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'

class Rating extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hidden: true,
      rating: {
        currentUser: this.props.currentUser,
        id: this.props.spotId,
        reviewValue: null
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({
      rating: {
        currentUser: this.props.currentUser,
        id: this.props.spotId,
        reviewValue: e.target.value
      }
    })
    console.log(this.state.rating)
  }

  render () {
    console.log(this.state.rating)
    return (
      <div className='rating-container'>
        <div className='thumbs-icon up'>
          <ThumbUp onClick={(e) => this.handleClick(e)} value='+1' style={{ color: '#EBF5EE' }}>Thumbs Up> </ThumbUp>
        </div>
        <div className='thumbs-icon down'>
          <ThumbDown onClick={(e) => this.handleClick(e)} value='-1' style={{ color: '#EBF5EE' }}>Thumbs Down</ThumbDown>
        </div>
      </div>
    )
  }
}

export default Rating

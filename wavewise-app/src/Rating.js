import React, { Component } from 'react'

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
          <button onClick={(e) => this.handleClick(e)} value='+1'>Thumbs Up</button>
        </div>
        <div className='thumbs-icon down'>
          <button onClick={(e) => this.handleClick(e)} value='-1'>Thumbs Down</button>
        </div>
      </div>
    )
  }
}

export default Rating

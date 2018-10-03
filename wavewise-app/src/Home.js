import React, { Component } from 'react'
import CoastSVG from './assets/CoastSVG'

import wavewise from './assets/wavewise-logo_0.5x.png'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      locations: props.locations
    }
  }

  componentDidMount () {
    this.setState({
      locations: this.props.locations
    })
  }

  render () {
    console.log(this.state.locations)
    return (
      <div className='container'>
        <h1 className='header'><img className='logo'
          alt='Sorry Surfer - Not Found'
          src={wavewise} />Wave<strong>Wise</strong></h1>
        <CoastSVG className='coastline' />
        <div className='more-info-link'>
          <h4>Check out the surrounding conditions</h4>
        </div>
      </div>
    )
  }
}

export default Home

import React, { Component } from 'react'
import CoastSVG from './assets/CoastSVG'

import wavewise from './assets/wavewise-logo_0.5x.png'
import SurfCityPin from './assets/SurfCityPin'
import NEpin from './assets/NEpin'
import SEpin from './assets/SEpin'
import CBpin from './assets/CBpin'

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
          alt='Sorry, Surfer - Not Found'
          src={wavewise} />Wave<strong>Wise</strong></h1>
        <CoastSVG className='coastline' />
        <SurfCityPin className='surf-city-pin' />
        <NEpin className='NE-pin' />
        <SEpin className='SE-pin' />
        <CBpin className='CB-pin' />
        <div className='more-info-link'>
          <h4>Check out the surrounding conditions</h4>
        </div>
      </div>
    )
  }
}

export default Home

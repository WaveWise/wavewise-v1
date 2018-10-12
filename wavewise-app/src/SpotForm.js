import React, { Component } from 'react'
import { Link } from '@reach/router'
import wavewise from './assets/wavewise-logo_0.5x.png'
import './SpotForm.css'

class SpotForm extends Component {
  constructor () {
    super()
    this.state = {
      spotName: '',
      wind: '',
      swelldir: '',
      period: '',
      tide: '',
      name: '',
      email: '',
      location: {},
      directions: ['E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE'],
      periods: ['4-6', '6-8', '10-12', '12-15', '15+']
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.showCoordinates = this.showCoordinates.bind(this)
  }

//   { newSpot: {
//     name: 'string',
//     currentUser: 'userId',
//     email: 'email',
//     spot_name: 'spot_name',
//     location: {lat: 'lat', long: 'long'},
//     swell_period_s: 'period',
//     swell_height_ft: 'height',
//     swell_direction: 'swelldir',
//     wind_direction: 'wind_dir',
//     tide_type: 'tide'
//   }
// }

  showCoordinates (pos) {
    let lat = pos.coords.latitude
    let long = pos.coords.longitude
    console.log(pos.coords)
    this.setState({
      location: Object.assign(
        {},
        this.state.location,
        { lat, long }
      )
    })
  }

  showError () {
    alert('location not found')
  }

  stopLocationWatch (id) {
    navigator.geolocation.clearWatch(id)
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.showCoordinates, this.showError)
    navigator.geolocation.watchPosition(this.showCoordinates)
  }

  handleNameChange (e) {
    this.setState({
      spotName: e.target.value
    })
  }

  handleClick (e) {
    e.preventDefault()
    alert('submitted!')
  }

  render () {
    const { spotName, wind, swelldir, tide, period, name, email } = this.state
    return (
      <div className='spot-form-container'>
        <form className='form'>
          <h3>Tell us about your favorite spot:</h3>
          <p>When the conditions are like you like them, we'll be able to tell you when it's on!</p>
          <div className='field-form'>
            <label>Your Name</label>
            <input type='text'
              value={name}
              placeholder='Spicoli'
              onChange={(e) => this.setState({ name: e.target.value })} />
          </div>
          <div className='field-form'>
            <label>Email</label>
            <input type='text'
              value={email}
              placeholder='spicoli@coolbuzz.club'
              onChange={(e) => this.setState({ email: e.target.value })} />
          </div>
          <div className='field-form'>
            <label>Spot Name</label>
            <input type='text'
              value={spotName}
              placeholder='the Jetty'
              onChange={(e) => this.handleNameChange(e)} />
          </div>
          <div className='field-form'>
            <label>Location</label>
            <button onClick={(e) => this.handleGetLocation(e)}>Locate</button>
          </div>
          <div className='field-form'>
            <label>Best Wind</label>
            <select value={wind} onChange={(e) => this.setState({ wind: e.target.value })}>
              {this.state.directions.map((dir, i) =>
                <option value={dir} key={i}>{dir}</option>
              )}
            </select>
          </div>
          <div className='field-form'>
            <label>Best Swell Direction</label>
            <select value={swelldir} onChange={(e) => this.setState({ swelldir: e.target.value })}>
              {this.state.directions.map((dir, i) =>
                <option value={dir} key={i}>{dir}</option>
              )}
            </select>
          </div>
          <div className='field-form'>
            <label>Best Swell Period</label>
            <select value={period} onChange={(e) => this.setState({ period: e.target.value })}>
              {this.state.periods.map((per, i) =>
                <option value={per} key={i}>{per}</option>
              )}
            </select>
          </div>
          <div className='field-form'>
            <label>Best Tide</label>
            <select value={tide} onChange={(e) => this.setState({ tide: e.target.value })}>
              <option value='High'>High</option>
              <option value='Low'>Low</option>
            </select>
          </div>
          <button onClick={(e) => this.handleClick(e)} type='submit'>Send it!</button>
        </form>
        <Link to='/' style={{ textDecoration: 'none', color: '#283044' }}><img className='return-home'src={wavewise} alt='Home' /></Link>
      </div>
    )
  }
}

export default SpotForm

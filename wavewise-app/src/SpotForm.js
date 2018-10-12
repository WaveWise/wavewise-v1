import React, { Component } from 'react'
import { Link } from '@reach/router'
import wavewise from './assets/wavewise-logo_0.5x.png'
import './SpotForm.css'
import data from './data'

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
      height: '',
      directions: ['E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE'],
      periods: ['4-6', '6-8', '10-12', '12-15', '15+'],
      heights: ['1-2', '2-3', '3-5', '5-8', 'Real Big', 'Huge']
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.showCoordinates = this.showCoordinates.bind(this)
    this.sendNewSpot = this.sendNewSpot.bind(this)
  }

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

  sendNewSpot () {
    let spotObject = {
      new_spot: {
        'user_name': this.state.name,
        'user': this.props.currentUser,
        'email': this.state.email,
        'spot_name': this.state.spotName,
        'location': {
          'latitude': this.state.location.lat,
          'longitude': this.state.location.long
        },
        'swell_period_s': this.state.period,
        'swell_height_ft': this.state.height,
        'swell_direction': this.state.swelldir,
        'wind_direction': this.state.wind,
        'tide_type': this.state.tide
      }
    }
    data.postNewSpot(spotObject)
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
    this.sendNewSpot()
  }

  render () {
    const { spotName, wind, swelldir, tide, period, name, email, height } = this.state
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
            <label>Best Swell Height</label>
            <select value={height} onChange={(e) => this.setState({ height: e.target.value })}>
              {this.state.heights.map((per, i) =>
                <option value={per} key={i}>{per}</option>
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
              <option value='HIGH'>High</option>
              <option value='LOW'>Low</option>
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

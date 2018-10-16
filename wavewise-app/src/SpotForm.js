import React, { Component } from 'react'
import { Link } from '@reach/router'
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
      city: '',
      state: '',
      height: '',
      submitted: false,
      directions: ['', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE'],
      periods: ['', '4-6', '6-8', '10-12', '12-15', '15+'],
      heights: ['', '1-2', '2-3', '3-5', '5-8', 'Real Big', 'Huge']
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.sendNewSpot = this.sendNewSpot.bind(this)
  }

  sendNewSpot () {
    let spotObject = {
      new_spot: {
        'user_name': this.state.name,
        'user': this.props.currentUser,
        'email': this.state.email,
        'spot_name': this.state.spotName,
        'city': this.state.city,
        'state': this.state.state,
        'swell_period_s': this.state.period,
        'swell_height_ft': this.state.height,
        'swell_direction': this.state.swelldir,
        'wind_direction': this.state.wind,
        'tide_type': this.state.tide
      }
    }
    data.postNewSpot(spotObject)
  }

  handleNameChange (e) {
    this.setState({
      spotName: e.target.value
    })
  }

  handleClick (e) {
    e.preventDefault()
    this.sendNewSpot()
    this.setState({ submitted: true })
  }

  render () {
    const { spotName, wind, swelldir, tide, period, name, email, height, city, state } = this.state
    return (
      <div className='spot-form-container'>
        {this.state.submitted
          ? <div>
            <div className='form-submit-response'>
              <h3>Spot saved.  We'll keep you posted on updates regarding {spotName}.</h3>
            </div>
            <div className='return-home-text'>
              <Link style={{ textDecoration: 'none', color: '#78A1BB' }} to='/'>return home</Link>
            </div>
          </div>
          : <div>
            <div className='return-home-text'>
              <Link to='/' style={{ textDecoration: 'none', color: '#78A1BB' }}>
                Home
              </Link>
            </div>
            <form className='form' noValidate>
              <h3>Recommend a spot for us to add:</h3>
              <p className='form-intro'>When conditions are great, you'll <br /> be the first to know!</p>
              <div className='field-form'>
                <label className='form-label'>Name</label>
                <input type='text'
                  value={name}
                  placeholder='Spicoli'
                  onChange={(e) => this.setState({ name: e.target.value })} />
              </div>
              <div className='field-form'>
                <label className='form-label'>E-mail</label>
                <input type='text' required
                  value={email}
                  placeholder='spicoli@coolbuzz.club'
                  onChange={(e) => this.setState({ email: e.target.value })} />
              </div>
              <div className='field-form-location'>
                <label className='form-label'>Location</label>
                <div className='location-field'>
                  <div className='location-box'>
                    <input className='field-form-half' type='text' required
                      value={city}
                      placeholder='City'
                      onChange={(e) => this.setState({ city: e.target.value })} />
                  </div>
                  <div className='location-box'>
                    <input className='field-form-half' type='text' required
                      value={state}
                      placeholder='State'
                      onChange={(e) => this.setState({ state: e.target.value })} />
                  </div>
                </div>
              </div>
              <div className='field-form'>
                <label className='form-label'>Spot Name</label>
                <input type='text'
                  value={spotName}
                  placeholder='the Jetty'
                  onChange={(e) => this.handleNameChange(e)} />
              </div>
              <div className='field-form'>
                <label className='form-label'>Best Wind</label>
                <select value={wind} onChange={(e) => this.setState({ wind: e.target.value })}>
                  {this.state.directions.map((dir, i) =>
                    <option value={dir} key={i}>{dir}</option>
                  )}
                </select>
              </div>
              <div className='field-form'>
                <label className='form-label'>Best Swell Direction</label>
                <select value={swelldir} onChange={(e) => this.setState({ swelldir: e.target.value })}>
                  {this.state.directions.map((dir, i) =>
                    <option value={dir} key={i}>{dir}</option>
                  )}
                </select>
              </div>
              <div className='field-form'>
                <label className='form-label'>Best Swell Height</label>
                <select value={height} onChange={(e) => this.setState({ height: e.target.value })}>
                  {this.state.heights.map((per, i) =>
                    <option value={per} key={i}>{per}</option>
                  )}
                </select>
              </div>
              <div className='field-form'>
                <label className='form-label'>Best Swell Period</label>
                <select value={period} onChange={(e) => this.setState({ period: e.target.value })}>
                  {this.state.periods.map((per, i) =>
                    <option value={per} key={i}>{per}</option>
                  )}
                </select>
              </div>
              <div className='field-form'>
                <label className='form-label'>Best Tide</label>
                <select value={tide} onChange={(e) => this.setState({ tide: e.target.value })}>
                  <option value='' />
                  <option value='HIGH'>high</option>
                  <option value='LOW'>low</option>
                </select>
              </div>
              <button className='submission' onClick={(e) => this.handleClick(e)} type='submit'>
                {/* <img className='return-home'src={wavewise} alt='Home' /> */}
                <p className='submit-button'>Submit</p>
              </button>
            </form>
          </div>}
      </div>
    )
  }
}

export default SpotForm

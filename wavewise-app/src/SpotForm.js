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
      number: '',
      location: {},
      directions: ['E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE'],
      periods: ['4-6', '6-8', '10-12', '12-15', '15+']
    }
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  showCoordinates (pos) {
    this.setState(state => {
      location: Object.assign(
        {},
        state.location,
        pos.coords
      )
    }
    )
  }

  componentDidMount () {
    if (!this.state.location) {
      navigator.geolocation.getCurrentPosition(this.showCoordinates)
    }
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
    console.log(this.state.location)
    const { spotName, wind, swelldir, tide, period, name, number } = this.state
    return (
      <div className='spot-form-container'>
        <form clasName='form'>
          <h3>Tell us about your favorite spot:</h3>
          <p>When the conditions are like you like them, we'll be able to tell you when it's on!</p>
          <div className='field-form'>
            <label>Your Name</label>
            <input type='text'
              value={name}
              placeholder='Tap Here'
              onChange={(e) => this.setState({ name: e.target.value })} />
          </div>
          <div className='field-form'>
            <label>Your Number</label>
            <input type='text'
              value={number}
              placeholder='123-456-7890'
              onChange={(e) => this.setState({ number: e.target.value })} />
          </div>
          <div className='field-form'>
            <label>Spot Name</label>
            <input type='text'
              value={spotName}
              placeholder='the Jetty'
              onChange={(e) => this.handleNameChange(e)} />
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

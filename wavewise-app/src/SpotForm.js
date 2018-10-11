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
      directions: ['E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE'],
      periods: ['4-6', '6-8', '10-12', '12-15', '15+']
    }
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange (e) {
    this.setState({
      spotName: e.target.value
    })
  }
  render () {
    const { spotName, wind, swelldir } = this.state
    return (
      <div className='spot-form-container'>
        <form clasName='form'>
          <h3>Tell us about your favorite spot:</h3>
          <p>When the conditions are like you like them, we'll be able to tell you when it's on!</p>
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
            <input type='text'
              value={spotName}
              onChange={(e) => this.handleNameChange(e)} />
          </div>
          <div className='field-form'>
            <label>Best Tide</label>
            <input type='text'
              value={spotName}
              onChange={(e) => this.handleNameChange(e)} />
          </div>
        </form>
        <Link to='/' style={{ textDecoration: 'none', color: '#283044' }}><img className='return-home'src={wavewise} alt='Home' /></Link>
      </div>
    )
  }
}

export default SpotForm

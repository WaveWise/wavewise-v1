import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import SpotCondition from './SpotCondition'
import data from './data'
import { default as UUID } from 'node-uuid'
import { Router } from '@reach/router'
import SpotForm from './SpotForm'

class App extends Component {
  constructor () {
    super()
    this.state = {
      spots: {
        NorthWrightsville: [],
        SouthWrightsville: [],
        SurfCity: [],
        CarolinaBeach: []
      },
      currentBestSpot: {},
      spotValues: [],
      currentUser: null
    }
    this.updateConditions = this.updateConditions.bind(this)
    this.setConditions = this.setConditions.bind(this)
  }

  componentDidMount () {
    const userId = window.localStorage.getItem('userId')
    if (userId) {
      this.setState({
        currentUser: userId
      })
    } else {
      const newUserId = UUID.v4()
      window.localStorage.setItem('userId', newUserId)
      this.setState({
        currentUser: newUserId
      })
    }
  }

  componentWillMount () {
    this.setConditions()
  }

  updateConditions () {
    this.setConditions()
  }

  setConditions () {
    data.getConditions()
      .then(res => {
        this.setState({
          spots: {
            SurfCity: res[0],
            NorthWrightsville: res[1],
            SouthWrightsville: res[2],
            CarolinaBeach: res[3]
          }
        })
        this.setState(state => ({
          spotValues: state.spotValues.concat(
            Object.values(state.spots).map(spot =>
              data.findSpotConditionValue(spot)))
        }))
        this.setState(state => ({
          currentBestSpot: Object.assign(
            {},
            state.currentBestSpot,
            data.selectTopSpot(this.state.spotValues.sort(data.rank))
          )
        }))
      })
  }

  render () {
    return (
      <Router>
        <Home path='/'
          bestSpot={this.state.currentBestSpot}
          spots={this.state.spots} />
        <SpotCondition path='/spots/:name/:tide/:tidetime/:swelldir/:height/:period/:windspeed/:winddir/:id/:rating'
          spots={this.state.spots}
          currentUser={this.state.currentUser}
          ratingHasBeenSent={this.ratingHasBeenSent}
          ratingSent={this.state.ratingSent} />
        <SpotForm path='/spotform' currentUser={this.state.currentUser} />
      </Router>
    )
  }
}

export default App

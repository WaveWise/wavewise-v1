import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import SpotCondition from './SpotCondition'
import data from './data'
import { default as UUID } from 'node-uuid'
import { Router } from '@reach/router'
import SpotForm from './SpotForm'
import firebase from './firebase'
import request from 'superagent/superagent.js'

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
      currentUser: this.getUserId(),
      showRating: true,
      location: {},
      msgToken: null
    }
    this.updateConditions = this.updateConditions.bind(this)
    this.setConditions = this.setConditions.bind(this)
    this.hideRating = this.hideRating.bind(this)
    this.resetRating = this.resetRating.bind(this)
    this.showCoordinates = this.showCoordinates.bind(this)
  }

  getUserId () {
    let userId = window.localStorage.getItem('userId')
    if (!userId) {
      userId = UUID.v4()
      window.localStorage.setItem('userId', userId)
    }
    return userId
  }

  showError () {
    alert('location not found')
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.showCoordinates, this.showError)
    navigator.geolocation.watchPosition(this.showCoordinates)
    // const messaging = firebase.messaging()
    // messaging.getToken().then((currentToken) => {
    //   if (currentToken) {
    //     this.setState({ msgToken: currentToken })
    //   } else {
    //     this.setState({ msgToken: null })
    //   }
    // }).catch((err) => {
    //   console.log('An error occurred while retrieving token. ', err)      
    // })
    // messaging.onTokenRefresh(() => {
    //   messaging.getToken().then((currentToken) => {
    //     if (currentToken) {
    //       this.setState({ msgToken: currentToken })
    //     } else {
    //       this.setState({ msgToken: null })
    //     }
    //   }).catch((err) => {
    //     console.log('An error occurred while retrieving token. ', err)      
    //   })
    // })
  }

  componentWillMount () {
    this.setConditions()
  }
  stopLocationWatch (id) {
    navigator.geolocation.clearWatch(id)
  }
  componentWillUnmount () {
    this.stopLocationWatch(navigator.geolocation.watchPosition(this.showCoordinates))
  }

  updateConditions () {
    this.setConditions()
  }

  hideRating () {
    this.setState({
      showRating: false
    })
  }
  resetRating () {
    this.setState({
      showRating: true
    })
  }

  showCoordinates (pos) {
    let lat = pos.coords.latitude
    let long = pos.coords.longitude
    this.setState({
      location: Object.assign(
        {},
        this.state.location,
        { lat, long }
      )
    })
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
          ratingSent={this.state.ratingSent}
          showRating={this.state.showRating}
          hideRating={this.hideRating}
          resetRating={this.resetRating} />
        <SpotForm path='/spotform' currentUser={this.state.currentUser} />
      </Router>
    )
  }
}

export default App

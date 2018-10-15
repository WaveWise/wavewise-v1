import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import SpotCondition from './SpotCondition'
import data from './data'
import { default as UUID } from 'node-uuid'
import { Router } from '@reach/router'
import SpotForm from './SpotForm'
import firebase from './firebase'

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
      showRating: true
    }
    this.updateConditions = this.updateConditions.bind(this)
    this.setConditions = this.setConditions.bind(this)
    this.hideRating = this.hideRating.bind(this)
    this.resetRating = this.resetRating.bind(this)
  }

  getUserId () {
    let userId = window.localStorage.getItem('userId')
    if (!userId) {
      userId = UUID.v4()
      window.localStorage.setItem('userId', userId)
    }
    return userId
  }

  // getUserId () {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({
  //       currentUser: user.getToken()
  //     })
  //   })
  // }

  // componentDidMount () {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({
  //       currentUser: user.getToken()
  //     })
  //   })
  // }

  componentWillMount () {
    this.setConditions()
  }

  updateConditions () {
    this.setConditions()
  }

  handleLogin = (event) => {
    event.preventDefault()
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  }
  handleLogout = (event) => {
    event.preventDefault()
    firebase.auth.signOut()
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
    console.log(this.state.currentUser)
    return (
      // <div>
      // <div className='page-header'>
      //   <button onClick={this.handleLogout}>Logout</button>
      //   <button onClick={this.handleLogin}>Login with Google</button>
      // </div>
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
      // </div>
    )
  }
}

export default App

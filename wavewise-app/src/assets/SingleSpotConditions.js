import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import data from './data'
import 'bulma/css/bulma.css'

class SingleSpotCondtions extends Component {
    constructor (props) {
      super()
      this.state = {
        selectedSpot: []
    }
}


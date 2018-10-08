import React, { Component } from 'react'

class Menu extends Component {
  render () {
    return (
      <select>
        {(Object.values(this.props.spots).map((spot) =>
          <option spot-id={spot.spot_id}>{spot.spot_name}</option>
        )
        )}
      </select>
    )
  }
}

export default Menu

import React, {Component} from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'
import Pin from './Pin'
const TOKEN = 'pk.eyJ1Ijoia3NjaGFyZiIsImEiOiJjam16MW1xNW8zdXhpM3hxY2M4YTYwZTZuIn0.XiCAadxMzrpr192c318hgQ'
// const navStyle = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   padding: '10px'
// }

export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewport: {
        width: 600,
        height: 600,
        latitude: 34.376947,
        longitude: -77.711225,
        zoom: 7
      }
    }
  }

  render () {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={TOKEN}
        mapStyle='mapbox://styles/mapbox/dark-v9'>
        <Marker latitude={34.2112} longitude={-77.7986} offsetLeft={5} offsetTop={0}>
          <div>Surf City</div>
          {/* <Pin /> */}
        </Marker>
        <Marker latitude={34.236491} longitude={-77.771866} offsetLeft={0} offsetTop={0}>
          <div>Wrightsville Beach-North End</div>
          {/* <Pin /> */}
        </Marker>
      </ReactMapGL>
    )
  }
}
//   render () {
//     const {viewport} = this.state
//     return (
//       <ReactMapGL
//         {...this.state.viewport}
//         onViewportChange={(viewport) => this.setState({viewport})}
//         mapStyle='mapbox://styles/mapbox/dark-v9'
//         mapboxApiAccessToken={TOKEN}>
//         <div className='nav' style={navStyle}>
//           <NavigationControl />
//         </div>
//       </ReactMapGL>
//     )
//   }
// }

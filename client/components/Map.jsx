import React from 'react'
import {Map, Marker, TileLayer, Popup} from 'react-leaflet'

// const myIcon = L.icon({
//   iconUrl: '../../server/public/images/knf.png',
//   iconSize: [10, 10]
// })

class Map1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: -36.8485,
      lng: 174.7633,
      zoom: 13
    }
  }

  render () {
    const position = [this.state.lat, this.state.lng]
    return (
      <div className='map'>hi
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            maxZoom='18'
            id= 'mapbox.streets'
            accessToken='pk.eyJ1IjoiYnJvbmJ1cmd1bmR5IiwiYSI6ImNqanJ3N3hlYzhvb2sza2xmdGZocmwzMHgifQ.W5lq17kl4kLbi4qmQ1DNrg'
          />
          <Marker position={position} >
            <Popup>Hi</Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default Map1

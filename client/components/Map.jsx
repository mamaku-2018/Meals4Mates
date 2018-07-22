import React from 'react'
import L from 'leaflet'
import {Map, Marker, TileLayer, Popup} from 'react-leaflet'
import path from 'path'

import {getAllStoreLocations} from '../actions/getAllStoreLocations'

const myIcon = L.icon({
  iconUrl: path.join(__dirname, './images/marker.png'),
  iconSize: [45, 50],
  shadowUrl: path.join(__dirname, './images/marker-shadow.png'),
  shadowSize: [80, 80]
})

class ViewMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: stores.lat,
      lng: stores.lng
    }
  }

  render () {
    const position = this.stores.map( => {

    return (
      <div className='map'>
        <Map center={[-36.8485, 174.7633]} zoom={13}>
          <TileLayer
            url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            maxZoom='18'
            id= 'mapbox.streets'
            accessToken='pk.eyJ1IjoiYnJvbmJ1cmd1bmR5IiwiYSI6ImNqanJ3N3hlYzhvb2sza2xmdGZocmwzMHgifQ.W5lq17kl4kLbi4qmQ1DNrg'
          />
          <Marker position={position} icon={myIcon}>
            <Popup><span>{stores.name}</span></Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default ViewMap

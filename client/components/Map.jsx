import React from 'react'
import L from 'leaflet'
import {Map, Marker, TileLayer, Popup} from 'react-leaflet'
import path from 'path'
import {connect} from 'react-redux'

import {getAllStoreLocations} from '../actions/getAllStoreLocations'

const myIcon = L.icon({
  iconUrl: path.join(__dirname, './images/marker.png'),
  iconSize: [45, 50],
  shadowUrl: path.join(__dirname, './images/marker-shadow.png'),
  shadowSize: [80, 80]
})

class ViewMap extends React.Component {
  componentDidMount () {
    this.props.getAllStoreLocations()
  }

  render () {
    return (
      <div className='map'>
        <Map center={[-36.8485, 174.7633]} zoom={12}>
          <TileLayer
            url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            maxZoom='18'
            id= 'mapbox.streets'
            accessToken='pk.eyJ1IjoiYnJvbmJ1cmd1bmR5IiwiYSI6ImNqanJ3N3hlYzhvb2sza2xmdGZocmwzMHgifQ.W5lq17kl4kLbi4qmQ1DNrg'
          />
          {(this.props.storeDetails && this.props.storeDetails.map((details) => {
            const position = {
              lat: details.lat,
              lng: details.lng
            }
            return (
              <Marker key={details.id} position={position} icon={myIcon}>
                <Popup><span>{details.name}<br />{details.address}</span></Popup>
              </Marker>
            )
          })
          )}
        </Map>
      </div>
    )
  }
}

const mapPropsToState = (state) => {
  return {
    storeDetails: state.storeDetails
  }
}

function mapDispatchToStore (dispatch) {
  return {
    getAllStoreLocations: () => {
      return dispatch(getAllStoreLocations())
    }
  }
}

export default connect(mapPropsToState, mapDispatchToStore)(ViewMap)

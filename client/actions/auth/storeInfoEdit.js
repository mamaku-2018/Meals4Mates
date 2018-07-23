import {showError, showSuccess} from '../'
import request from 'superagent'
import Geocode from 'react-geocode'
import config from '../../../config.json'

Geocode.setApiKey(`${config.GOOGLE_API_KEY}`)
Geocode.enableDebug()

export function storeInfoEdit (user) {
  return dispatch => {
    const searchAddress = user.address + ', ' + user.suburb + ', ' + user.city
    return getLatLng(searchAddress)
      .then(latLng => {
        const updatedUser = {
          id: user.id,
          owner: user.owner,
          email: user.email,
          name: user.name,
          address: user.address,
          suburb: user.suburb,
          city: user.city,
          lat: latLng.lat,
          lng: latLng.lng,
          phone: user.phone,
        }
      return request
        .put(`/api/v1/store/${user.id}/edit`)
        .send(updatedUser)
        .then(() => {
          dispatch(showSuccess('Your details have been successfully updated'))
        })
      })
        .catch(err => {
          dispatch(showError(err.message))
        })
    }
  }


export function getLatLng (userAddress) {
  return Geocode.fromAddress(userAddress).then(
    response => {
      const {lat, lng} = response.results[0].geometry.location
      const latLng = {
        lat: lat,
        lng: lng
      }
      return (latLng)
    },
    error => {
      // eslint-disable-next-line
      console.error('error: ', error)
    }
  )
}
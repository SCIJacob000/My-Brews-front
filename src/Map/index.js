import React, {Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'
require('dotenv').config()


export class MapContainer extends Component {
	  render() {
    return (
      <Map google={this.props.google} zoom={4.4} style={{width: '75%', height: '75%', position: 'relative'}}  initialCenter={{
            lat: 39.5781,
            lng: -93.6298
          }}>
      </Map>
      );
	}
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg")
})(MapContainer)

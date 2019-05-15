import React, {Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'
require('dotenv').config()


export class MapContainer extends Component {
	  render() {
    return (
      <Map google={this.props.google} zoom={4.5} style={{width: '75%', height: '75%', position: 'relative'}}>
      </Map>
      );
	}
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg")
})(MapContainer)

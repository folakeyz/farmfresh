import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Map extends Component {
    static defaultProps = {
        center: {
          lat: 6.524379,
          lng: 3.379206
        },
        zoom: 11
      }
     
      render(){
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCMFenVsrcDTW58M6CXCISsyIIVosGRaIc"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}
}
export default Map;
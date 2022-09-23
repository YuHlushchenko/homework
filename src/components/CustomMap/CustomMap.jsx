import React from 'react'
import styles from './CustomMap.module.sass'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const CustomMap = () => {
  const position = [48.924707, 24.716313]

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        style={
          window.innerWidth <= 1650
            ? window.innerWidth <= 800
              ? { width: "100%", height: "300px" }
              : { width: "100%", height: "400px" }
            : { width: "100%", height: "500px" }
        }>
        <TileLayer
          url='https://api.mapbox.com/styles/v1/yuhlushchenko/cl8dh46o4000o15o4x7nwlzto/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieXVobHVzaGNoZW5rbyIsImEiOiJjbDhkaDlhMDQxYm5xM3BuM2QxODBkdGxsIn0.VLSxsRbMQPWITpkATcPRdw'
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
        />
        <Marker position={position}>
          <Popup>
            м. Івано-Франківськ, <br /> Василіянок 1
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default CustomMap
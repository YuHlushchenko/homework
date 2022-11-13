import React from 'react'
import styles from './CustomMap.module.sass'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const svgIcon = L.divIcon({
  html: `
  <svg width="65" height="65" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M59 11.7998C39.471 11.7998 23.6 27.6708 23.6 47.1998C23.6 59.1178 30.503 69.0888 38.527 76.0508C41.064 78.2338 45.489 81.7148 49.442 86.8478C53.808 92.5708 57.761 98.7068 59 102.837C60.239 98.7068 64.192 92.5708 68.558 86.8478C72.511 81.7148 76.936 78.2338 79.473 76.0508C87.497 69.0888 94.4 59.1178 94.4 47.1998C94.4 27.6708 78.529 11.7998 59 11.7998ZM59 26.9038C61.6653 26.9038 64.3046 27.4288 66.767 28.4487C69.2294 29.4687 71.4668 30.9637 73.3515 32.8484C75.2361 34.733 76.7311 36.9704 77.7511 39.4329C78.7711 41.8953 79.296 44.5345 79.296 47.1998C79.296 49.8651 78.7711 52.5043 77.7511 54.9667C76.7311 57.4292 75.2361 59.6666 73.3515 61.5512C71.4668 63.4359 69.2294 64.9309 66.767 65.9509C64.3046 66.9708 61.6653 67.4958 59 67.4958C53.6172 67.4958 48.4548 65.3575 44.6486 61.5512C40.8424 57.745 38.704 52.5826 38.704 47.1998C38.704 41.817 40.8424 36.6546 44.6486 32.8484C48.4548 29.0421 53.6172 26.9038 59 26.9038Z" fill="#FF0000"/>
  </svg>`,
  className: '',
  iconAnchor: [30, 70],
})

const CustomMap = () => {
  const position = [48.924707, 24.716313]

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={position}
        zoom={18}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}>
        <TileLayer
          // url="https://api.mapbox.com/styles/v1/yuhlushchenko/cl8dh46o4000o15o4x7nwlzto/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieXVobHVzaGNoZW5rbyIsImEiOiJjbDhkaDlhMDQxYm5xM3BuM2QxODBkdGxsIn0.VLSxsRbMQPWITpkATcPRdw"
          url="https://api.mapbox.com/styles/v1/yuhlushchenko/cl8dh46o4000o15o4x7nwlzto/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieXVobHVzaGNoZW5rbyIsImEiOiJjbDhkZ3piY3MxYmwxM3BuM21neHF5NjQxIn0.5wfXi6cT5Rj4BFwmyTWwKg"
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
        />
        <Marker position={position} icon={svgIcon}>
          <Popup className={styles.popup}>
            м. Івано-Франківськ, <br /> Василіянок 1
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default CustomMap

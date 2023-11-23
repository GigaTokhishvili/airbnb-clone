import React, { useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';

function MapComp({ userLat, userLong, userZoom }) {
  const [lat, setLat] = useState(userLat);
  const [lng, setLng] = useState(userLong);
  const [zoom, setZoom] = useState(11);

  // lat 51.43258577998574
  // lon -0.19565271801491235

  useEffect(() => {
    setLat(userLat)
    setLng(userLong)
    setZoom(userZoom)
  }, [userLat, userLong, userZoom])

  return (
    <Map
      width='100%'
      height='100%'
      latitude={lat}
      longitude={lng}
      zoom= {zoom}
      mapStyle='mapbox://styles/dumbledore-rules/cloqgs23j00kh01qy0qi60c8c'
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(e) => {
        setLng(e.viewState.longitude);
        setLat(e.viewState.latitude);
        setZoom(e.viewState.zoom);
      }}
    >
      {/* {data?.map((results) => {
        return (
          <>
            <Marker
              key={results.longitude}
              longitude={results.longitude}
              latitude={results.latitude}
            >
            </Marker>
          </>
        )
      })} */}
    </Map>
  )
}

export default MapComp
import React, { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';

function MapComp({ data,  }) {
  const [lat, setLat] = useState(51.43258577998574);
  const [lng, setLng] = useState(-0.19565271801491235);
  const [zoom, setZoom] = useState(9);

  // lat 51.43258577998574
  // lon -0.19565271801491235

  return (
    <Map
      width='100%'
      height='100%'
      latitude={lat ? lat : 51.43258577998574}
      longitude={lng ? lng : -0.19565271801491235}
      zoom= {zoom}
      mapStyle='mapbox://styles/dumbledore-rules/cloqgs23j00kh01qy0qi60c8c'
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(e) => {
        setLng(e.viewState.longitude);
        setLat(e.viewState.latitude);
        setZoom(e.viewState.zoom);
      }}
    >
      {data?.map((results) => {
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
      })}
    </Map>
  )
}

export default MapComp
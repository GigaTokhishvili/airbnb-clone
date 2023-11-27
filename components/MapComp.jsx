import React, { useEffect, useRef, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';

function MapComp({ data, setNewLoc, userLat, userLong, userZoom }) {
  const [lat, setLat] = useState('51.43258577998574');
  const [lng, setLng] = useState('-0.19565271801491235');
  const [zoom, setZoom] = useState(11);
  const mapRef = useRef(null)

  // lat 51.43258577998574
  // lon -0.19565271801491235

  useEffect(() => {
    // userLat ? setLat(userLat) : setLat(initialSearchResults?.results[2].latitude);
    // userLong ? setLng(userLong) : setLng(initialSearchResults?.results[2].longitude);
    userLat ? setLat(userLat) : setLat(51.43258577998574);
    userLong ? setLng(userLong) : setLng(-0.19565271801491235);

    userZoom ? setZoom(userZoom) : setZoom(12);

  }, [userLat, userLong, userZoom])

  useEffect(() => {
    mapRef.current?.flyTo({
      center: [data?.results[0].longitude, data?.results[0].latitude] || [51.43258577998574, -0.19565271801491235],
      curve: 1.2,
      essential: true,
      maxDuration: 15000,
      zoom:15,
    })
   
  }, [data])

  useEffect(() => {
    mapRef.current?.flyTo({
      center: [setNewLoc[1], setNewLoc[0]],
      curve: 1.2,
      essential: true,
      maxDuration: 15000,
      zoom:15,
    })
   
  }, [setNewLoc])

  return (
    <Map
      ref={mapRef}
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
      {data?.results.map((results) => {
        return (     
            <Marker
              key={results.longitude}
              longitude={results.longitude}
              latitude={results.latitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div className='w-fit px-1 py-1 flex items-center justify-center rounded-xl bg-white border-[1px] border-neutral-300 shadowRound font-extrabold hover:scale-105 transition duration-100'>
                € {results.price}
              </div>
            </Marker>
        )
      })}
    </Map>
  )
}

export default MapComp
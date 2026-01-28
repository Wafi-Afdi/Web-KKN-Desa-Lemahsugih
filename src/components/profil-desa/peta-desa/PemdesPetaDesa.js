'use client'
import React, { useState, useEffect, useMemo } from 'react'
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';

function PemdesPetaDesa() {
  const [geoData, setGeoData] = useState(null);

  const canvasRenderer = useMemo(() => L.canvas(), []);

  useEffect(() => {
    fetch('/data/batasadmin.geojson')
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Error loading GeoJSON:", err));
  }, []);

  const markers = [
    {
      geoCode: [-7.011634067752833, 108.17508176871564],
      popUp: "Balai Desa Lemahsugih",
      description: "Jl. Singadiwangsa No. 1 Lemahsugih",
    }
  ]

  const houseIcon = new Icon({
    iconUrl: "/map-icon/town-hall.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],    
    popupAnchor: [0, -30]
  })


  return (
    <MapContainer
      center={[-7.011788, 108.174951]}
      zoom={13}
      className="h-[400px] w-full rounded-2xl shadow-lg"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {geoData && (
        <GeoJSON
          data={geoData}
          pathOptions={{
            renderer: canvasRenderer,
            fillColor: '#10b981',
            color: '#064e3b',
            weight: 1,
            fillOpacity: 0.5
          }}
        />
      )}
      {
        markers.map((mark) =>
          <Marker
            key={mark.geoCode[0]}
            position={mark.geoCode}
            icon={houseIcon}

          >
            <Popup>
              <p className='font-header font-bold text-base'>{mark.popUp}</p>
              <p className='font-body text-sm m-0'>{mark.description}</p>
              <img 
                className='w-full h-[100px] md:h-[150px] object-cover'
                src='/balai-desa/balai02.webp'
                alt='Foto Balai Desa'
              />
            </Popup>
          </Marker>
        )
      }
    </MapContainer>
  )
}

export default PemdesPetaDesa
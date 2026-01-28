'use client'
import React, { useMemo, useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, GeoJSON, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';

function PetaKomoditasSingle({
  kodeKomoditas = "Unknown"
}) {
  const canvasRenderer = useMemo(() => L.canvas(), []);

  const [geoJSONData, setGeoJSONData] = useState(null);
  const [geoJSONRBI, setGeoJSONRBI] = useState(null);

  useEffect(() => {
    fetch('/data/komoditas.geojson')
      .then(res => res.json())
      .then(data => {
        setGeoJSONData(data)
      })
      .catch(err => console.error("Gagal load GeoJSON", err));
    fetch('/data/batasadmin.geojson')
      .then(res => res.json())
      .then(data => setGeoJSONRBI(data))
      .catch(err => console.error("Gagal load GeoJSON", err));
  }, []);

  const getStyle = () => ({
    fillColor: "#22c55e",
    weight: 2,
    opacity: 1,
    color: 'black',
    dashArray: '3',
    fillOpacity: 0.6
  });

  return (
    <MapContainer
      center={[-7.011788, 108.174951]}
      zoom={16}
      className="h-[400px] w-full rounded-2xl shadow-lg"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geoJSONRBI && (
        <GeoJSON
          data={geoJSONRBI}
          pathOptions={{
            renderer: canvasRenderer,
            color: '#064e3b',
            weight: 1,
            weight: 2,
            dashArray: '10, 10',
            lineCap: 'butt'
          }}
        />
      )}
      {geoJSONData && (
        <GeoJSON
          data={geoJSONData}
          style={getStyle}
          filter={
            (feature) => {
              return feature.properties.Keterangan === kodeKomoditas
            }
          }
          onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.Keterangan) {
              layer.bindPopup(`<strong>Komoditas:</strong> ${feature.properties.Keterangan}`);
            }
          }}
        />
      )}
    </MapContainer>
  )
}

export default PetaKomoditasSingle
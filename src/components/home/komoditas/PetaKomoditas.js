'use client'
import React, { useMemo, useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, GeoJSON, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';

const getStyle = (feature) => {
  const keterangan = feature.properties.Keterangan;
  let color = "#3388ff"; //default

  if (keterangan === "Waluh") color = "#90b058";
  if (keterangan === "Tomat") color = "#ef4444";
  if (keterangan === "Jagung") color = "#fbff00";
  if (keterangan === "Cabai") color = "#cc5125";
  if (keterangan === "Kubis") color = "#1e5708";
  if (keterangan === "Padi") color = "#edb228";
  if (keterangan === "Selada") color = "#66ed5a";
  if (keterangan === "Kopi") color = "#2e0b06";
  if (keterangan === "Palawija") color = "#6e1720";
  if (keterangan === "Campur") color = "#1480de";
  if (keterangan === "Pisang") color = "#61c41a";
  if (keterangan === "Bawang Merah") color = "#b00b60";
  return {
    fillColor: color,
    weight: 1,
    opacity: 1,
    color: 'black',
    fillOpacity: 0.9
  };
};

function Legend() {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      div.style.backgroundColor = "white";
      div.style.padding = "10px";
      div.style.borderRadius = "8px";
      div.style.boxShadow = "0 0 15px rgba(0,0,0,0.2)";

      const grades = ["Waluh", "Tomat", "Jagung", "Cabai", "Kubis", "Padi", "Selada", "Kopi", "Palawija", "Campur", "Pisang", "Bawang Merah"];
      const colors = ["#90b058", "#ef4444", "#fbff00", "#cc5125", "#1e5708", "#edb228", "#66ed5a", "#2e0b06", "#6e1720", "#1480de", "#61c41a", "#b00b60"];

      let labels = ["<strong>Komoditas</strong>"];

      for (let i = 0; i < grades.length; i++) {
        labels.push(
          `<i style="background:${colors[i]}; width: 18px; height: 18px; float: left; margin-right: 8px;border-radius: 50%;"></i> ${grades[i]}`
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };

    legend.addTo(map);
    return () => legend.remove();
  }, [map]);

  return null;
}


function PetaKomoditas() {
  const canvasRenderer = useMemo(() => L.canvas(), []);

  const [showLegend, setShowLegend] = useState(true);
  const [geoJSONData, setGeoJSONData] = useState(null);
  const [geoJSONRBI, setGeoJSONRBI] = useState(null);

  useEffect(() => {
    fetch('/data/komoditas.geojson')
      .then(res => res.json())
      .then(data => setGeoJSONData(data))
      .catch(err => console.error("Gagal load GeoJSON", err));
  }, []);

  useEffect(() => {
    fetch('/data/batasadmin.geojson')
      .then(res => res.json())
      .then(data => setGeoJSONRBI(data))
      .catch(err => console.error("Gagal load GeoJSON", err));
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
    <div className='mt-10'>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <h2 className='text-primary font-header text-3xl md:text-4xl lg:text-6xl font-bold'>
          Peta Persebaran Komoditas
        </h2>

        <button
          onClick={() => setShowLegend(!showLegend)}
          className="bg-primary text-white px-4 py-2 rounded-lg font-body text-sm hover:bg-opacity-90 transition-all shadow-md z-20"
        >
          {showLegend ? 'Sembunyikan Legenda' : 'Tampilkan Legenda'}
        </button>
      </div>
      <div className="relative w-full max-w-5xl mx-auto px-5 py-8 z-10">
        <MapContainer
          center={[-7.011788, 108.174951]}
          zoom={16}
          className="h-[400px] w-full rounded-2xl shadow-lg"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
                </Popup>
              </Marker>
            )
          }
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
              onEachFeature={(feature, layer) => {
                if (feature.properties && feature.properties.Keterangan) {
                  layer.bindPopup(`<strong>Komoditas:</strong> ${feature.properties.Keterangan}`);
                }
              }}
            />
          )}
          {showLegend && <Legend />}
        </MapContainer>
      </div>
    </div>
  )
}

export default PetaKomoditas
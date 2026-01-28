'use client'
import React, { useState, useEffect, useMemo } from 'react'
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';

const mapFeatureGeoJson = {
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"properties": {},
			"geometry": {
				"coordinates": [
					[
						108.17202224406049,
						-7.010459917314321
					],
					[
						108.17217760088596,
						-7.010691210313411
					],
					[
						108.17191349425622,
						-7.011107537436573
					],
					[
						108.17163385194016,
						-7.011338830122114
					],
					[
						108.1714784951003,
						-7.011801415147829
					],
					[
						108.17127653120502,
						-7.012186902319016
					],
					[
						108.1716804589937,
						-7.012387355521341
					],
					[
						108.17213099383417,
						-7.012371936047728
					],
					[
						108.17217760088596,
						-7.012572389170401
					]
				],
				"type": "LineString"
			}
		},
		{
			"type": "Feature",
			"properties": {},
			"geometry": {
				"coordinates": [
					[
						108.17193418720439,
						-7.01483229533747
					],
					[
						108.17200069888816,
						-7.013743066112781
					],
					[
						108.17212041991871,
						-7.012891485127156
					],
					[
						108.17216697809761,
						-7.012574617386164
					]
				],
				"type": "LineString"
			}
		},
		{
			"type": "Feature",
			"properties": {},
			"geometry": {
				"coordinates": [
					[
						108.1722135362765,
						-7.012554813145485
					],
					[
						108.17258674145722,
						-7.01257564406896
					],
					[
						108.17376399826031,
						-7.01221256618453
					],
					[
						108.17443576626573,
						-7.01200792216197
					],
					[
						108.17513413894386,
						-7.011710858097317
					]
				],
				"type": "LineString"
			}
		},
		{
			"type": "Feature",
			"properties": {},
			"geometry": {
				"coordinates": [
					108.17224812136442,
					-7.014511106958906
				],
				"type": "Point"
			}
		},
		{
			"type": "Feature",
			"properties": {},
			"geometry": {
				"coordinates": [
					108.17237196911259,
					-7.010488828875822
				],
				"type": "Point"
			}
		}
	]
}

function PemdesPetaBalaiDesa() {

	const lineStyle = {
		color: "#2563eb",
		weight: 10,
		opacity: 0.7,
		lineJoin: 'round'
	};

	const pointToLayer = (feature, latlng) => {
		if (feature.geometry.type === "Point") {
			const text = feature.properties.label || "Point Location"; // Change 'label' to your property key

			const textIcon = L.divIcon({
				className: 'custom-text-label',
				html: `<div class="bg-white px-2 py-1 rounded shadow-md border border-gray-300 whitespace-nowrap font-bold text-xs">${text}</div>`,
				iconSize: [0, 0],
				iconAnchor: [50, 10]
			});

			return L.marker(latlng, { icon: textIcon });
		}
	};

	const markers = [
		{
			geoCode: [-7.011634067752833, 108.17508176871564],
			popUp: "Balai Desa Lemahsugih",
			description: "Nama Jalan",
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
			<GeoJSON
				data={mapFeatureGeoJson}
				style={lineStyle}
				pointToLayer={pointToLayer}
			/>
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
		</MapContainer>
	)
}

export default PemdesPetaBalaiDesa
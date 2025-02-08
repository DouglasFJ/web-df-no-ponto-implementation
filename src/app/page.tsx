'use client'
import Image from "next/image";
import maplib from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useState } from "react";
import Map, { useMap } from "@/components/Map";
import SearchComponent from "@/components/shared/SearchComponent";
import { buscarGeoOnibus } from "@/services/busApiService";

export default function Home() {
  const mapOptions: maplib.MapOptions = {
    container: 'map',
    style: process.env.NEXT_PUBLIC_MAPTILER_STYLE,
    center: [-47.808723, -15.788950], 
    zoom: 11 
  }

  const [linhaBus, setLinhaBus] = useState('')
  const map = useMap(mapOptions)
  
  useEffect(() => {
    if (linhaBus && map) {
      buscarGeoOnibus(linhaBus).then(geoR => {
        const marker = new maplib.Marker()
        marker.setLngLat(geoR.features[0].geometry.coordinates)
        marker.addTo(map)
      })
    }
  }, [linhaBus])

  return (
    <div className="h-screen w-screen relative flex flex-col">
      <header className="w-full h-24 p-5 flex justify-between items-center">
        <h1>Web Df No Ponto</h1>
        <SearchComponent setLinha={setLinhaBus}/>
      </header>

      <div className="p-5 flex-1">
        <Map 
          className="map"
          mapOptions={mapOptions}
        />
      </div>

    </div>
  );
}

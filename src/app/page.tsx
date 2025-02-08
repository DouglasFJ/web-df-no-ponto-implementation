'use client'
import Image from "next/image";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  let busCode = '0.761'

  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map', 
      style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
      center: [-47.808723, -15.788950], 
      zoom: 11 
    });
    map.resize()

    let res = axios.get(`https://www.sistemas.dftrans.df.gov.br/gps/linha/${busCode}/geo/recent`)
    
    const mark = new maplibregl.Marker()
    
    res.then((ar)=>{
      mark.setLngLat(ar.data.features[0].geometry.coordinates)
      mark.addTo(map)
    })
  }, [])



  return (
    <div className="h-screen p-4">
      <h1 className="">MAP</h1>

      <div className="justify-center">
        <div id="map" className="map">
        </div>
      </div>

    </div>
  );
}

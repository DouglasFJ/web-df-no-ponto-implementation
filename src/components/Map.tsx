import maplb from 'maplibre-gl';
import {ComponentProps, useEffect, useRef} from "react";


interface MapProps extends ComponentProps<'div'> {
    mapOptions: maplb.MapOptions
}

function useMap(options: maplb.MapOptions) {
    const mapRef = useRef<maplb.Map>(null)
    
    useEffect(()=>{
        if (mapRef.current === null) {
            mapRef.current = new maplb.Map(options)
        }
    }, [options])

    return mapRef.current
}

function Map(
    props: MapProps
) {
    const map = useMap(props.mapOptions)
    const idMap = props.mapOptions.container.toString()

    useEffect(()=>{
        map?.resize()
    }, [props.className])

    return (
        <div id={idMap} className={props.className}></div>
    )
}

export default Map
export {useMap}
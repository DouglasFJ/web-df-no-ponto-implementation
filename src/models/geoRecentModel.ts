interface GeoRecent {
    features: LinhaGeo[]
    type: string
}

interface LinhaGeo {
    geometry: {coordinates: [number, number], type:string},
    type: string,
    properties: {
        numero: string,
        horario: number,
        linha: string,
        operadora: string,
        id_operadora: number
    }
}

export type {GeoRecent, LinhaGeo}
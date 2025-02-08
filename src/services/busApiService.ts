import axios, { AxiosResponse } from "axios";

async function buscarGeoOnibus(linha: string) {
    let axiosRes: AxiosResponse<GeoRecent,any> = await axios.get(`${process.env.NEXT_PUBLIC_API_DF_NO_PONTO}gps/linha/${linha}/geo/recent`)

    return axiosRes.data
}

export {buscarGeoOnibus}
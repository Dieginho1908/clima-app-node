const axios =  require('axios');

const getLugarLatLng = async (direccion) =>{

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`, 
        headers: {'X-RapidAPI-Key': ' 90fbf5b764msh375733563e079a9p11e95fjsnbb2ca2d43805'}
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const ubicacion = data.name;
    const lat = data.lat;
    const lng = data.lon;
       
    
        return {
            ubicacion,
            lat,
            lng
        }


}


module.exports = {
    getLugarLatLng
}



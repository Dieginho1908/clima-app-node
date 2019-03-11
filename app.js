const  lugar = require('./lugar/lugar');
const  clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Dirección de la ciudad para tener el clima',
        demand:true
    }
}).argv;

    


    

    const getInfo = async (direccion) => {

        try{
            const coord = await lugar.getLugarLatLng(direccion);
            const temp = await clima.getclima(coord.lat, coord.lng);

            return `La temperatura de ${coord.ubicacion} es de ${temp}`;
        }catch{
            return `No se pudo determinar el clima de ${direccion}`
        }
       
    }

    getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
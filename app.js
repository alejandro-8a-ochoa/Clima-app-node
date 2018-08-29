// const axios = require('axios');

const Lugar = require('./lugar/lugar');
const Clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {

        let cord = await Lugar.getLugarLatLng(direccion);
        let temp = await Clima.getClima(cord.lat, cord.lng);
        return `El clima en ${direccion} es de: ${temp} °C`;

    } catch (e) {
        return `No se encontro el clima de la ciudad ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


// Lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         let lat = resp.lat;
//         let lng = resp.lng;

//         Clima.getClima(lat, lng)
//             .then(temp => console.log(temp))
//             .catch(e => console.log(e));

//     })
//     .catch(e => console.log(e));
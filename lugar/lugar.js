const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`no hay resultados para su busqueda: ${direccion} => no encontrada`);
    }

    let address = resp.data.results[0];
    let coors = address.geometry.location;


    return {
        direccion: address.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}

module.exports = {
    getLugarLatLng
}
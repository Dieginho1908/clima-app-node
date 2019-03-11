const axios = require('axios');

const getclima = async (lat, lng) =>{
   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=49166a92fa460c3e8f5dadcaf94891f6&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getclima
}
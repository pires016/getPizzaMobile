import axios from 'axios';

const api = axios.create({
    //baseURL:  'https://my-json-server.typicode.com/barretorodrigo/getpizza-data/pizzas'
    baseURL:  'https://getpizzaria.herokuapp.com/'

});

export default api;
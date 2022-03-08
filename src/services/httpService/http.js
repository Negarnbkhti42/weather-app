import axios from 'axios';

const weatherApi = axios.create();

weatherApi.defaults.baseURL = "http://api.weatherapi.com/v1";
weatherApi.defaults.params = {};
weatherApi.defaults.params['key'] = "c582e3515da44ce1a90113153220803";

const http = {
    get: weatherApi.get,
}

export default http;
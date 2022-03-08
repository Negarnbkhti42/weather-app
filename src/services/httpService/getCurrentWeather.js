import http from "./http";

export function getCurrentWeather() {
    return http.get('/current.json?q=Paris');

}
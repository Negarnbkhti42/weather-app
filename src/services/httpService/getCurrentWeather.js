import http from "./http";

export function getCurrentWeather() {
    return http.get('/forecast.json?q=Tehran&&days=7')
        .then(res => res.data);

}
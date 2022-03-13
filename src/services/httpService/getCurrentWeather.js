import http from "./http";

export function getCurrentWeather() {
    return http.get('/forecast.json?q=Tehran&&days=1')
        .then(res => res.data);

}
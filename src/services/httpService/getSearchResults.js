import http from "./http";

export function getSearchResults(input) {
    return http.get(`/search.json?q=${input}`)
        .then(res => res.data);
}
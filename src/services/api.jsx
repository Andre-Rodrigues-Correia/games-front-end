import axios from "axios";

const api = axios.create({
    // baseURL: 'https://api-games-crud.herokuapp.com'
    baseURL: 'http://localhost:9090'
    
});

export default api;
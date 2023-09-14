import axios from "axios";


const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: { // các header của request
        // 'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
    },

});

export default axiosClient;
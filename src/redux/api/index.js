import axios from 'axios';

const baseURL ='https:www.omdbapi.com?apiKey=35c5b4a8';

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL+url,
    data,
    headers
});
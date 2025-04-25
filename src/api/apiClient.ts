import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    if (!config.params) {
        config.params = {};
    }
    config.params.access_key = process.env.REACT_APP_API_KEY;
    return config;
});

export default apiClient;

import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react16-21ae9.firebaseio.com/'
});

export default instance;
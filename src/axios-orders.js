import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-b093e.firebaseio.com/'
});

export default instance;
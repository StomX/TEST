import axios from 'axios';
import config from './config';

const fetchUserData = (userId) => axios.get(`${config.baseUrl}/user/${userId}.json`);

export {
    fetchUserData
}

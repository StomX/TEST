import axios from 'axios';
import { config } from './config';

const fetchAskList = () => axios.get(`${config.baseUrl}/ask/1.json`);

export {
    fetchAskList
}

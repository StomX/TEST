import axios from 'axios';
import config from './config';

const fetchAskList = () => axios.get(`${config.baseUrl}/ask/1.json`);
const fetchAskItem = (askId) => axios.get(`${config.baseUrl}/item/${askId}.json`);

export {
    fetchAskList,
    fetchAskItem
}

import axios from 'axios';
import config from './config';

const fetchNewsList = () => axios.get(`${config.baseUrl}/news/1.json`);

export {
    fetchNewsList
}
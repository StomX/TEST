import axios from 'axios';
import { config } from './config';


axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const fetchJobsList = () => axios.get(`${config.baseUrl}/jobs/1.json`);

export {
    fetchJobsList
}

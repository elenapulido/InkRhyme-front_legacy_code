import axios from 'axios';
import authHeader from './AuthService';


const HTTPService = () => {

  const url = 'http://localhost:8082/api/v1/poems';

  const ApiGetService = async () => {
    const response = await axios.get(`${url}`);
    return response.data;
  };

  const ApiGetbyIdService = async (id) => {
    const response = await axios.get(`${url}/${id}`,{ headers:{ "Authorization": 'Bearer ' + authHeader() }});
    return response.data;

  };

  const ApiPostService = async (data) => {
    const response = await axios.post(`${url}`, data,{ headers:{"Content-Type" : "application/json","Authorization": 'Bearer ' + authHeader()}});
    return response.data;

  };

  const ApiPutService = async (id, data) => {
    const response = await axios.put(`${url}/${id}`, data,{ headers: authHeader() });
    return response.data;

  };

  const ApiDeleteService = async (id) => {
    const response = await axios.delete(`${url}/${id}`,{ headers: authHeader() });
    return response.data;

  };

  return {
    ApiGetService,
    ApiGetbyIdService,
    ApiPostService,
    ApiPutService,
    ApiDeleteService,
    url
  };
};

export default HTTPService;
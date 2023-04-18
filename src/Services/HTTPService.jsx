import axios from 'axios';

const HTTPService = () => {

  const url = 'http://localhost:8080/api/v1/poems';

  const ApiGetService = async () => {
    const response = await axios.get(`${url}`);
    return response.data;
  };

  const ApiGetbyIdService = async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  };

  const ApiPostService = async (data) => {
    const response = await axios.post(`${url}`, data,{headers:{"Content-Type" : "application/json"}});
    return response.data;
  };

  const ApiPutService = async (id, data) => {
    const response = await axios.put(`${url}/${id}`, data);
    return response.data;
  };

  const ApiDeleteService = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
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
import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'http://localhost:8082/api/test/';

const UserService = () => {
  const getPublicContent = async () => {
    try {
      const response = await axios.get(API_URL + 'all');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserBoard = async () => {
    try {
      const response = await axios.get(API_URL + 'user', { headers: authHeader() });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getModeratorBoard = async () => {
    try {
      const response = await axios.get(API_URL + 'mod', { headers: authHeader() });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getAdminBoard = async () => {
    try {
      const response = await axios.get(API_URL + 'admin', { headers: authHeader() });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
  };
};

export default UserService;

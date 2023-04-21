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
  const getUserById = async (userId) => {
    try {
      const response = await axios.get(API_URL + `user/${userId}`, { headers: authHeader() });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const addUser = async (userData) => {
    try {
      const response = await axios.post(API_URL + 'user', userData, { headers: authHeader() });
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
  const getAdminById = async (adminId) => {
    try {
      const response = await axios.get(API_URL + `admin/${adminId}`, { headers: authHeader() });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const addAdmin = async (adminData) => {
    try {
      const response = await axios.post(API_URL + 'admin', adminData, { headers: authHeader() });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const updateAdminById = async (adminId, adminData) => {
    try {
      const response = await axios.put(API_URL + `admin/${adminId}`, adminData, { headers: authHeader() });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAdminById = async (adminId) => {
    try {
      const response = await axios.delete(API_URL + `admin/${adminId}`, { headers: authHeader() });
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
    getUserById,
    addUser,
    getAdminById,
    addAdmin,
    updateAdminById,
    deleteAdminById,
  };
};

export default UserService;

import axios from "axios";

const baseUrl = process.env.VUE_APP_URL_API;

const usersService = {};

usersService.login = async (user) => {
  return await axios.post(` ${baseUrl}/api/users/login`, user);
};

usersService.register = async (user) => {
  return await axios.post(`${baseUrl}/api/users/register`, user);
};

export default usersService;

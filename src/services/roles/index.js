import axios from "axios";

const baseUrl = process.env.VUE_APP_URL_API;

const rolesService = {};

rolesService.list = async () => {
  return await axios.get(` ${baseUrl}/api/roles/listar`);
};

rolesService.listOne = async (id) => {
  return await axios.get(`${baseUrl}/api/roles/listarUno/${id}`);
};

rolesService.add = async (rol) => {
  return await axios.post(`${baseUrl}/api/roles/rol`, rol);
};

rolesService.edit = async (rol, name) => {
  return await axios.put(`${baseUrl}/api/roles/upDate/${rol}`, {
    name: name,
  });
};

rolesService.delete = async () => {
  return await axios.delete(`${baseUrl}/api/roles//eliminar/:id`);
};

export default rolesService;

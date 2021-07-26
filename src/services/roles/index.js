import axios from "axios";

const baseUrl = process.env.VUE_APP_URL_API;

const rolesService = {};

rolesService.list =  async () => {
    return await axios.get(` ${baseUrl}/api/roles/listar`)
}

export default rolesService;



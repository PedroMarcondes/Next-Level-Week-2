import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.12:3333", 
  // endereço da conexao do Expo e a porta do server
});

export default api;
import axios from 'axios';

import router from '../routes/index';

let baseUrl = import.meta.env.VITE_API_URL;
// Crie uma instância do Axios com as configurações desejadas
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
});

// Adicione um interceptor de requisição
axiosInstance.interceptors.request.use(
  (config) => {
    if(!!config){
      let bearer = JSON.parse(localStorage.getItem("bearer") || "{}");

      config.headers.Authorization = `Bearer ${bearer}`;
    }
    // Faça qualquer manipulação necessária na configuração da requisição
    // Antes de enviar a requisição, como adicionar headers, autenticação, etc.
    return config;
  },
  (error) => {
    // Trate erros de requisição aqui
    return Promise.reject(error);
  }
);

// Adicione um interceptor de resposta
axiosInstance.interceptors.response.use(
  (response) => {
    // Faça qualquer manipulação necessária na resposta da requisição
    // Antes de retorná-la para o código que a chamou
    return response;
  },
  (error) => {
    // Trate erros de resposta aqui
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("bearer");
      localStorage.removeItem("user");
      
      router.push('/portal/login');
    }
    return Promise.reject(error);
  }
);



export default axiosInstance;
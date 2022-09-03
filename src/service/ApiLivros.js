import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://olimpia-api.herokuapp.com',
  });

  export const livrosPost = async (res) => {
   const response = await api.post('/livros', res)
      return response.data.livros
      ;
  }
 


 
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://olimpia-api.herokuapp.com',
  });

  export const estoqueGet = async () => {
    const response = await api.get('/livros')
       return response.data.livros;
   }

   export const getLivroTitulo = async (titulo) => {
    const response = await api.get(`livros/titulo/${titulo}`)
    console.log(response);
      return response.data.livros.titulo
   }

   export const getLivroId = async (id) => {
    const response = await api.get(`/livros/idLivro/${id}`)
    return response.data.titulo
   }

  export const livrosPost = async (res) => {
   const response = await api.post('/livros', res)
      // location.reload();
      return response.data.msg
      ;
  }

  export const updateBook = async (form, id) => {
    const response = await api.put(`/livros/idLivro/${id}`, form)
    return response.data.msg
  }

  export const livrosDelete = async (id) => {
    const response = await api.delete(`/livros/idLivro/${id}`)
       return response.data.msg;
   }
 


 
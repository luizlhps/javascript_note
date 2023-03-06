import { useNavigate } from 'react-router';
import Api from './api';

const UserService = {
  token: localStorage.getItem('token'),

  register: (params: any) => Api.post("/users/register", params),

  login: async (params: any) => {
    const response = await Api.post('/users/login', params);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('token', response.data.token);
  },

  logout: () => {
    localStorage.removeItem('token');
  }
}

export default UserService;
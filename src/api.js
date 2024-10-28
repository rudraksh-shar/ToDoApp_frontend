// src/api.js
import axios from 'axios';
//const API_URL = 'http://localhost:3000/todos';
const API_URL = 'https://to-do-app-backend-3z68.vercel.app/';


export const getTodos = () => axios.get(API_URL);
export const createTodo = (title) => axios.post(API_URL, { title });
export const updateTodo = (id, completed) => axios.patch(`${API_URL}/${id}`, { completed });
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);

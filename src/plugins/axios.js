import axios from 'axios';

export default axios.create({
  baseURL: 'http://todos.test/api'
})
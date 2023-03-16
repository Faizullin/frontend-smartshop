import axios from "axios";


export default axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
    withCredentials: true,
    //transformRequest: [(data) => JSON.stringify(data.data)],
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
})
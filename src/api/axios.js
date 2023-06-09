import axios from "axios";

var baseUrl = 'http://rfid-kassa.com'
if(window.baseApiUrl){ 
    baseUrl = window.baseApiUrl
}
export default axios.create({
    baseURL: baseUrl,
    //timeout: 10000,
    withCredentials: true,
    //transformRequest: [(data) => JSON.stringify(data.data)],
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
})
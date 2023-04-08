import axios from "axios";
import jwtDecode from "jwt-decode";
const apiUrl = process.env.REACT_APP_API_URL;

export function login(username, password) {
    console.log(username, password);
    return axios(apiUrl + "login", {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
          'Access-Control-Allow-Credentials': 'true'
        },
        auth:  { username, password },
        withCredentials: true,
        credentials: 'same-origin',
        crossdomain: true,
      })
}

export function getCurrentUser() {
    try {
        const token = localStorage.getItem("token");
        const obj = JSON.parse(token);
        console.log(jwtDecode(obj.access_token))
        return jwtDecode(obj.access_token);
    } catch (error) {
        return null;
    }
}

export function logout() {
    localStorage.removeItem("token");
}

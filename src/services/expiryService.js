import jwtDecode from "jwt-decode";

export function isTokenExpired() {
    try {
        const token = localStorage.getItem("token");
        const obj = JSON.parse(token);
        const decodedToken = JSON.parse(atob(obj.access_token.split('.')[1]));
        const expirationTime = decodedToken.exp * 1000; // convert to milliseconds
        const currentTime = Date.now();

        return currentTime > expirationTime;
    } catch (error) {
        return null;
    }
}
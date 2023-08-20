import axios from "axios";
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

//write other auth functions here
// export const organizerLogin = async (email, password) => {
//     const response = await axios.post(
//         "http://localhost:5000/api/organizer/login",
//         {
//         email,
//         password,
//         }
//     );
//     return response.data;
// }


export const isTokenExpired = () => {
    
  const token = localStorage.getItem("token");
  if (!token) {
    // Token not found, consider it as expired
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert milliseconds to seconds

    // Calculate the timestamp for 24 hours into the future
    const expirationTime = currentTime + (24 * 60 * 60); // 24 hours in seconds

    // Compare the token's expiration time with the calculated expiration time
    return decodedToken.exp < expirationTime;
  } catch (error) {
    // Token is invalid or malformed, consider it as expired
    return false;
  }
};

export const getJwtToken = () => {
    return localStorage.getItem("token");
};
import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommerceapp-backend-nt07.onrender.com",
});

export default instance;

import axios from "axios";


export const Axios  = axios.create({
  baseURL: "https://0452138700ab20f3.mokky.dev",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
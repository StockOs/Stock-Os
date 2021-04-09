import axios from "axios"

export default axios.create({
  baseURL: "http://localhost:443/api/",
  headers: {
    "Content-type": "application/json",
  }
})
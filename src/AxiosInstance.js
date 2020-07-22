import Axios from "axios"

const axiosInstance = Axios.create({
  baseURL: "localhost:8080"
})

export default axiosInstance

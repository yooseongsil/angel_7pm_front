import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

export default instance

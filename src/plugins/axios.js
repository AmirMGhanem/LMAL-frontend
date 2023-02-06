import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/'
})

export default Axios

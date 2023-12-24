import axios from 'axios'
const server_port = process.env.REACT_APP_SERVER_PORT

export default axios.create(({
    baseURL: `http://localhost:${server_port}`
}))

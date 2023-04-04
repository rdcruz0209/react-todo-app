import axios from 'axios'

const apiClient = axios.create(
  {
    baseURL: 'http://localhost:8080',
  },
)

export function retrieveHelloWorldBean() {
  return apiClient.get('/hello-world-bean')
}

export function retrieveHelloWorldPathVariable(username) {
  return apiClient.get(`/hello-world/path-variable/${username}`)
}

// can also be written as:
// export const retrieveHelloWorldBean
// = () => axios.get('http://localhost:8080/hello-world-bean')

// both are valid in js development. choose one and be consistent with your syntax

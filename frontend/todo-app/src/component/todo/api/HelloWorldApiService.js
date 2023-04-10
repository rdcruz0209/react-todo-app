import { apiClient } from './ApiClient'

export function retrieveHelloWorldBean() {
  return apiClient.get('/hello-world-bean')
}

export function retrieveHelloWorldPathVariable(username, token) {
  return apiClient.get(`/hello-world/path-variable/${username}`,
    // {
    //   headers: {
    //     Authorization: token,
    //   },
    // }
  )
}

// can also be written as:
// export const retrieveHelloWorldBean
// = () => axios.get('http://localhost:8080/hello-world-bean')

// both are valid in js development. choose one and be consistent with your syntax

import axios from 'axios'

const apiClient = axios.create(
  {
    baseURL: 'http://localhost:8080',
  },
)

export function retrieveAllTodosForUser(username) {
  return apiClient.get(`/users/${username}/todos`)
}
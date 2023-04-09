/* eslint-disable no-console */
// Create a context
// Put some state in the context
// Share the created context with other components

import { createContext, useContext, useState } from 'react'
import { executeBasicAuthenticationService } from '../api/HelloWorldApiService'
import { apiClient } from '../api/ApiClient'

export const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  //
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [username, setUsername] = useState(null)
  const [token, setToken] = useState(null)

  // const valueToBeShared = { number, isAuthenticated, setAuthenticated }

  // function login(username, password) {
  //   if (password === 'password' && username === 'Robert') {
  //     setAuthenticated(true)
  //     setUsername(username)
  //     return true
  //   }
  //   else {
  //     setAuthenticated(false)
  //     return false
  //   }
  // }

  async function login(username, password) {
    // eslint-disable-next-line prefer-template
    const baToken = 'Basic ' + window.btoa(username + ':' + password)

    try {
      const response = await executeBasicAuthenticationService(baToken)
      // eslint-disable-next-line eqeqeq
      if (response.status == 200) {
        setAuthenticated(true)
        setUsername(username)
        setToken(baToken)

        apiClient.interceptors.request.use(
          (config) => {
            console.log('intercepting and adding a token')
            config.headers.Authorization = baToken
            return config
          },
        )
        return true
      }
      else {
        logout()
        return false
      }
    }
    catch (error) {
      logout()
      return false
    }
    //
  }

  function logout() {
    setAuthenticated(false)
    setUsername(null)
    setToken(null)
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout, username, token }}>{children}</AuthContext.Provider>
}

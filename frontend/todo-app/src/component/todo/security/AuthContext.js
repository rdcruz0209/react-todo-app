// Create a context
// Put some state in the context
// Share the created context with other components

import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  //
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [username, setUsername] = useState(null)

  // const valueToBeShared = { number, isAuthenticated, setAuthenticated }

  function login(username, password) {
    if (password === 'password' && username === 'Robert') {
      setAuthenticated(true)
      setUsername(username)
      return true
    }
    else {
      setAuthenticated(false)
      return false
    }
  }

  function logout() {
    setAuthenticated(false)
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>{children}</AuthContext.Provider>
}

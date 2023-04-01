// Create a context
// Put some state in the context
// Share the created context with other components

import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [number, setNumber] = useState(0)
  const [isAuthenticated, setAuthenticated] = useState(false)
  // const valueToBeShared = { number, isAuthenticated, setAuthenticated }

  // setInterval(
  //   () => setNumber(number + 1)
  //   , 2000)

  // console.log(children)
  return (
        <AuthContext.Provider value ={ { number, isAuthenticated, setAuthenticated } }>
            {children}
        </AuthContext.Provider>
  )
}

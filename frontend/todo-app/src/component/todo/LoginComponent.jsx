import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function LoginComponent() {
  const authContext = useAuth()
  const [username, setUserName] = useState('Robert')
  const [password, setPassword] = useState('password')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const navigate = useNavigate()

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  const handPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  function handleSubmit() {
    if (password === 'password' && username === 'Robert') {
      authContext.setAuthenticated(true)
      // eslint-disable-next-line no-console
      console.log('Authenticated Successfully')
      setShowSuccessMessage(true)
      setShowErrorMessage(false)
      navigate(`/welcome/${username}`)
    }
    else {
      // eslint-disable-next-line no-console
      console.log('Authentication Failed. Please check your credentials.')
      setShowErrorMessage(true)
      setShowSuccessMessage(false)
      authContext.setAuthenticated(false)
    }
  }

  return (
      <div>
        <h1>React Todo Management Application</h1>
        <h2>Login</h2>
        <div className="Login">
          {showSuccessMessage && <div>Authenticated Successfully</div>}
          {showErrorMessage && (
            <div>Authentication Failed. Wrong Credentials.</div>
          )}
          <div className="LoginForm">
            <div>
              <label>User Name:</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleUserNameChange}
                required
              ></input>
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handPasswordChange}
                required
              ></input>
            </div>
            <button type="button" name="login" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
  )
}

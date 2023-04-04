import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function LoginComponent() {
  const authContext = useAuth()
  const [username, setUserName] = useState('Robert')
  const [password, setPassword] = useState('password')
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const navigate = useNavigate()

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  const handPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  function handleSubmit() {
    if (authContext.login(username, password))
      navigate(`/welcome/${username}`)
    else setShowErrorMessage(true)
  }

  return (
    <div>
      <h1>React Todo Management Application</h1>
      <h2>Login</h2>
      <div className='Login'>
        {showErrorMessage && <div>Authentication Failed. Wrong Credentials.</div>}
        <div className='LoginForm'>
          <div>
            <label>User Name:</label>
            <input type='text' name='username' value={username} onChange={handleUserNameChange} required></input>
          </div>
          <div>
            <label>Password:</label>
            <input type='password' name='password' value={password} onChange={handPasswordChange} required></input>
          </div>
          <button type='button' name='login' onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

/* eslint-disable no-console */
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

export default function WelcomeComponent() {
  const { username } = useParams()
  const [response, setResponse] = useState()

  const authContext = useAuth()

  function calleHelloWorldRestApi() {
    console.log('called')
    retrieveHelloWorldPathVariable('Robert', authContext.token)
      .then((response) => {
        successfulResponse(response)
        setResponse(response.data)
      })
      .catch(error => console.log(error))
      .finally(() => console.log('cleanup'))
  }

  function successfulResponse(response) {
    console.log(response)
  }

  return (
      <div>
        <h1>Welcome to React Todo App, {username}!</h1>
        <div className="Welcome">
          Manage Your todos <Link to="/todos">here</Link>.
        </div>
        <div className='btn btn-success m-3' onClick={calleHelloWorldRestApi}>Hello World Rest API</div>
        <div className="text-info m-3">
        {response}
        </div>
      </div>
  )
}

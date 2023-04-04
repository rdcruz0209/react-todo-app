/* eslint-disable no-console */
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'

export default function WelcomeComponent() {
  const { username } = useParams()
  const [message, setMessage] = useState(null)

  function callHelloWorldRestApi() {
    retrieveHelloWorldPathVariable(username)
      .then(response => successfulResponse(response))
      .catch(error => errorResponse(error))
      .finally(() => console.log('cleanup'))
  }

  function successfulResponse(response) {
    console.log(response)
    setMessage(response.data.message)
  }
  function errorResponse(error) {
    console.log(error)
  }

  return (
      <div>
        <h1>Welcome to React Todo App, {username}!</h1>
        <div className="Welcome">
          Manage Your todos <Link to="/todos">here</Link>.
        </div>
        <div>
          <button className="btn btn-success m-3" onClick={callHelloWorldRestApi}>Call Hello World REST API</button>
        </div>
        <div className="text-info">
          { message }
        </div>

      </div>
  )
}

/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteTodoApiCall, retrieveAllTodosForUserApi } from './api/TodoApiService'
import { useAuth } from './security/AuthContext'

export default function ListTodosComponent() {
  const [todos, setTodos] = useState([])

  const authContext = useAuth()

  const username = authContext.username

  const [message, setMessage] = useState(null)

  const navigate = useNavigate()

  useEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    () => refreshTodos(), [],
  )

  function refreshTodos() {
    retrieveAllTodosForUserApi(username)
      .then((response) => {
        setTodos(response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))
      .finally(() => console.log('cleanup'))
  }

  function deleteTodo(username, id) {
    deleteTodoApiCall(username, id)
      .then(
        () => {
          setMessage(`Delete of Todo with ID = ${id} successful`)
          refreshTodos()
        },
      )
      .catch(
        error => console.log(error),
      )
  }

  function updateTodo(id) {
    navigate(`/todo/${id}`)
  }

  function addNewTodo() {
    navigate('/todo/-1')
  }

  return (
    <div className='container'>
      <h1>Things You Want To Do:</h1>
      {message && <div className='alert alert-warning'>{message}</div>}
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Description</th>
              <th>Is Done?</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(
              todo => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.isCompleted.toString()}</td>
                <td>{todo.targetDate}</td>
                <td><button className='btn btn-warning' onClick={() => { deleteTodo(username, todo.id) }}>Delete</button></td>
                <td><button className='btn btn-success' onClick={() => updateTodo(todo.id) }>Update</button></td>
              </tr>
              ))}
          </tbody>
        </table>
        {todos.length === 0 && <div>You have No Todo</div>}
      </div>
      <div className='btn btn-success m-4' onClick={addNewTodo}>Add New Todo</div>
    </div>
  )
}

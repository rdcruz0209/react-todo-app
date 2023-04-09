/* eslint-disable no-console */
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import moment from 'moment'
import { createTodoApi, retrieveTodoApi, updateTodoApi } from './api/TodoApiService'
import { useAuth } from './security/AuthContext'

export default function TodoComponent() {
  const params = useParams()
  const id = params.id

  const [description, setDescription] = useState('')
  const [targetDate, setTargetDate] = useState()
  const authContext = useAuth()
  const navigate = useNavigate()
  const username = authContext.username

  useEffect(

    // eslint-disable-next-line react-hooks/exhaustive-deps
    () => retrieveTodos(), [id],
  )

  function retrieveTodos() {
    // eslint-disable-next-line eqeqeq
    if (id != -1) {
      retrieveTodoApi(username, id)
        .then((response) => {
          setDescription(response.data.description)
          setTargetDate(response.data.targetDate)
        })
        .catch(
          error => console.log(error),
        )
    }
  }
  function onSubmit(values) {
    console.log(values)
    const todo = {
      id,
      username,
      description: values.description,
      targetDate: values.targetDate,
      isCompleted: false,
    }
    console.log(todo)
    console.log('ello')

    // eslint-disable-next-line eqeqeq
    if (id == -1) {
      createTodoApi(username, todo)
        .then(() => {
          navigate('/todos')
        })
        .catch(
          error => console.log(error),
        )
    }
    else {
      updateTodoApi(username, id, todo)
        .then((response) => {
          console.log(response)
          navigate('/todos')
        })
        .catch(
          error => console.log(error),
        )
        .finally(() => console.log('cleanup'))
    }
  }

  function validate(values) {
    const errors = {
    }
    if (values.description.length < 5) {
      errors.description = 'Enter at least 5 characters'
      console.log(errors.description)
    }

    // eslint-disable-next-line eqeqeq
    if (values.targetDate == null || values.targetDate == '' || !moment(values.targetDate.isValid)) {
      errors.targetDate = 'Enter a valid target Date'
      console.log(errors.targetDate)
    }
    return errors
  }

  return (
    <div className="container">
        <h1>Enter Todo Details</h1>
        <div>
          <Formik initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
          >
            {
            props => (
              <Form>
                <ErrorMessage
                name="description"
                component="div"
                className='alert alert-warning'>

                </ErrorMessage>
                <ErrorMessage
                name="targetDate"
                component="div"
                className='alert alert-warning'>
                </ErrorMessage>
                <fieldset className='form-group'>
                  <label>Description</label>
                  <Field type='text' className='form-control' name='description'/>
                </fieldset>
                <fieldset className='form-group'>
                  <label>Target Date</label>
                  <Field type='date' className='form-control' name="targetDate"/>
                </fieldset>
                <div>
                  <button className='btn btn-success m-5' type='submit'>Save</button>
                </div>

              </Form>
            )}
            </Formik>

        </div>
    </div>
  )
}

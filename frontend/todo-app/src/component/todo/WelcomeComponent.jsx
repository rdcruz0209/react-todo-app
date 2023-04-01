import { Link, useParams } from 'react-router-dom'

export default function WelcomeComponent() {
  const { username } = useParams()

  return (
      <div>
        <h1>Welcome to React Todo App, {username}!</h1>
        <div className="Welcome">
          Manage Your todos <Link to="/todos">here</Link>.
        </div>
      </div>
  )
}

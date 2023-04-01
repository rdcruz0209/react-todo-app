import { useContext } from 'react'
import { AuthContext } from './security/AuthContext'

export default function FooterComponent() {
  const authContext = useContext(AuthContext)

  // eslint-disable-next-line no-console
  console.log(`Footer component - ${authContext.number}`)
  return (
      <footer className="footer">
        <div className="container">Footer</div>
      </footer>
  )
}

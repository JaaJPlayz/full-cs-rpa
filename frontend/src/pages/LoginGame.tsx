import { useState, useEffect } from 'react'
import { randomEmailGenerator, randomPasswordGenerator, randomUsernameGenerator } from '../helpers/Randomizer'
import valuesVerifier from '../helpers/Verifier'

function LoginGame() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [sampleUsername, setSampleUsername] = useState('')
  const [sampleEmail, setSampleEmail] = useState('')
  const [samplePassword, setSamplePassword] = useState('')

  const [points, setPoints] = useState(0)

  const verifySubmission = () => {
    if (valuesVerifier(username, password, email, sampleUsername, samplePassword, sampleEmail)) {
      setPoints(points + 1)
    }
    else {
      setPoints(points - 1)
    }
  }

  useEffect(() => {
    setSampleUsername(randomUsernameGenerator(8))
    setSampleEmail(randomEmailGenerator(8))
    setSamplePassword(randomPasswordGenerator(8))
  }, [points])

  const submitButton = (e: any) => {
    e.preventDefault()
    verifySubmission()
  }

  return (
    <div>
      <h1>LoginGame</h1>
      <p style={{ color: points > 0 ? 'green' : 'red' }}>Points: {points}</p>
      <form onSubmit={submitButton}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={() => submitButton}>Submit</button>
      </form>

      <p className="sample-username">Sample Username: {sampleUsername}</p>
      <p className="sample-email">Sample Email: {sampleEmail}</p>
      <p className="sample-password">Sample Password: {samplePassword}</p>
    </div>
  )
}

export default LoginGame

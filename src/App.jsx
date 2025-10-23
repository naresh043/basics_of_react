import './App.css'
import React, { useState } from 'react'
import BasicForm from './Components/BasicForm'
import { HelloWorld } from './Components/HelloWorld'
import LogIn from './Components/LogIn'
import SignUp from './Components/SingnUp'

function App() {
  const [currentTask, setCurrentTask] = useState(null)

  // This function decides which component to render
  const renderTask = () => {
    switch (currentTask) {
      case 'hello':
        return <HelloWorld />
      case 'basic':
        return <BasicForm />
      case 'login':
        return <SignUp />
      case 'signup':
        return <BasicForm />
      default:
        return <h2 style={{ textAlign: 'center' }}>Please select a task</h2>
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Assignments</h1>

      {/* Task List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <button onClick={() => setCurrentTask('hello')}>
            1. Hello World
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentTask('basic')}>
            2. Basic Form Creation
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentTask('login')}>
            3. Login Form
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentTask('signup')}>
            4. Registration Form
          </button>
        </li>
      </ul>

      {/* Render selected task */}
      <div style={{ marginTop: '30px' }}>{renderTask()}</div>
    </div>
  )
}

export default App

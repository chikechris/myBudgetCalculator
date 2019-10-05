import React, {useState} from 'react'
import ExpList from './components/ExpList'
import ExpForm from './components/ExpForm'
import Alert from './components/Alert'
import uuid from 'uuid/v4'

import './App.css'

const initialExps = [
  { id: uuid(), charge: 'mortgage', amount: 1200 },
  { id: uuid(), charge: 'food', amount: 200 },
  { id: uuid(), charge: 'car', amount: 400 }
]

function App () {

  const [exp, setExp] = useState(initialExps)
  console.log('state:', exp)
  return (
    <div>
      <Alert />
      <ExpForm />
      <ExpList />
    </div>
  )
}

export default App

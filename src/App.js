import React, { useState } from 'react'
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
  const [exps, setExp] = useState(initialExps)

  return (
    <>
      <Alert />
      <h1>Budget App</h1>
      <main className='App'>
        <ExpForm />
        <ExpList exps={exps} />
      </main>
      <h1>
        total spending:{' '}
        <span className='total'>
          $
          {exps.reduce((acc, curr) => {
            return (acc += curr.amount)
          }, 0)}
        </span>
      </h1>
    </>
  )
}

export default App

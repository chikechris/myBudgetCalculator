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
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({show:false})
  const [edit, setEdit] = useState(false)
  

  const handleCharge = e => {
    setCharge(e.target.value)
  }

  const handleAmount = e => {
    setAmount(e.target.value)
  }
  const handleAlert = ({type, text}) => {
    setAlert({show: true, type,text})
    setTimeout(()=> {
      setAlert({show:false})
    },2000)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (charge !== '' && amount > 0) {
      const addExp = { id: uuid(), charge, amount }
      setExp([...exps, addExp])
      handleAlert({type: 'success', text: 'item added'})
      setCharge('')
      setAmount('')

    } else {
      handleAlert({type: 'danger', text:'charge cant be empty and amount has to be bigger than zero'})
    }
  }
const handleClearItems = () => {
  setExp([])
 handleAlert({ type: 'danger', text: 'All items deleted' })
 
}

  const handleDelete = (id) =>{
const tempExp = exps.filter(item => item.id !== id)
setExp(tempExp)
handleAlert({type: 'danger', text: 'Item deleted'})
  }

  const handleEdit = id => {}


  return (
    <>
    {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <Alert />
      <h1>My Budget App Calculator</h1>
      <main className='App'>
        <ExpForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpList exps={exps} handleDelete={handleDelete} handleEdit={handleEdit} handleClearItems={handleClearItems}/>
      </main>
      <h1>
        total spending:{' '}
        <span className='total'>
          $
          {exps.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount))
          }, 0)}
        </span>
      </h1>
    </>
  )
}

export default App

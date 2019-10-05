import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'

const ExpItem = ({ exp }) => {
  const { id, charge, amount } = exp
  return (
    <li className='item'>
      <div className='info'>
        <span className='exp'>{charge}</span>
        <span className='amount'>${amount}</span>
      </div>
      <button className='edit-btn' aria-label='edit button'>
        <MdEdit />
      </button>
      <button className='clear-btn' aria-label='delete button'>
        <MdDelete />
      </button>
    </li>
  )
}

export default ExpItem

import React from 'react'
import Item from './ExpItem'
import { MdDelete } from 'react-icons/md'
const ExpList = ({ exps, handleEdit, handleDelete, handleClearItems }) => {
  return (
    <>
      <ul className='list'>
        {exps.map(exp => {
          return (
            <Item
              key={exp.id}
              exp={exp}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )
        })}
      </ul>
      {exps.length > 0 && (
        <button className='btn' onClick={handleClearItems}>
          clear expenses
          <MdDelete className='btn-icon' />
        </button>
      )}
    </>
  )
}

export default ExpList

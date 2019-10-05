import React from 'react'
import Item from './ExpItem'
import { MdDelete } from 'react-icons/md'
const ExpList = ({ exps }) => {
  return (
    <>
      <ul className='list'>
        {exps.map(exp => {
          return <Item key={exp.id} exp={exp} />
        })}
      </ul>
      {exps.length > 0 && (
        <button className='btn'>
          clear expenses
          <MdDelete className='btn-icon' />
        </button>
      )}
    </>
  )
}

export default ExpList

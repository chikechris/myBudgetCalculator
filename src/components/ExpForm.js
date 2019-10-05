import React from 'react'
import { MdSend } from 'react-icons/md'

const ExpForm = () => {
  return (
    <form>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='expense'>charge</label>
          <input
            type='text'
            className='form-control'
            id='charge'
            name='charge'
            placeholder='input charge here......'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='expense'>amount</label>
          <input
            type='text'
            className='form-control'
            id='amount'
            name='amount'
            placeholder='input amount here......'
          />
        </div>
      </div>
      <button type='submit' className='btn'>
        submit
        <MdSend/>
      </button>
    </form>
  )
}

export default ExpForm

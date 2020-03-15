import React from 'react';
import { MdSend } from 'react-icons/md';

const ExpForm = props => {
  const {
    charge,
    amount,
    handleCharge,
    handleAmount,
    handleSubmit,
    edit
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='expense'>name of charge</label>
          <input
            type='text'
            className='form-control'
            id='charge'
            name='charge'
            placeholder='input charge here......'
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='expense'>charge amount</label>
          <input
            type='number'
            className='form-control'
            id='amount'
            name='amount'
            placeholder='input amount here......'
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type='submit' className='btn'>
        {edit ? 'edit' : 'submit'}
        <MdSend />
      </button>
    </form>
  );
};

export default ExpForm;

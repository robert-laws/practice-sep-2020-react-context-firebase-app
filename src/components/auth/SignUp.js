import React, { useState } from 'react';

export const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='container'>
      <form className='white'>
        <h5 className='grey-text text-darken-3'>Sign Up</h5>
        <div className='input-field'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            onChange={handleChange}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            onChange={handleChange}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' onChange={handleChange} />
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={handleChange}
          />
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>Login</button>
        </div>
      </form>
    </div>
  );
};

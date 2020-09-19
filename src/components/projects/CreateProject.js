import React, { useState } from 'react';

export const CreateProject = () => {
  const [form, setForm] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Create New Project</h5>
        <div className='input-field'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='title' onChange={handleChange} />
        </div>
        <div className='input-field'>
          <label htmlFor='content'>Project Content</label>
          <textarea
            className='materialize-textarea'
            name='content'
            id='content'
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>
            Create New Project
          </button>
        </div>
      </form>
    </div>
  );
};

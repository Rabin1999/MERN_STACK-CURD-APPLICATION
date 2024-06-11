import React from 'react';
import './Formtable.css';

const Formtable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={rest.name}
          onChange={handleOnChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={rest.email}
          onChange={handleOnChange}
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={rest.mobile}
          onChange={handleOnChange}
          required
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleclose}>Close</button>
      </form>
    </div>
  );
};

export default Formtable;

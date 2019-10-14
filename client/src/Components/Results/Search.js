import React, { useState } from 'react';

const Search = ({ SearchValue }) => {
  const [name, setName] = useState('');
  const nameChangeHandler = event => setName(event.target.value);
  const onClickHandler = () => {
    SearchValue(name);
    setName('');
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter name"
        onChange={nameChangeHandler}
        required
      />
      <button className="btn btn-success btn-block" onClick={onClickHandler}>
        {' '}
        Search{' '}
      </button>
    </div>
  );
};

export default Search;

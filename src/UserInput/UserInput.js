import React from 'react';

const UserInput = props => {
  const { changeNameHandler, name } = props;

  return (
    <div>
      <input type="text" onChange={changeNameHandler} value={name} />
    </div>
  );
};

export default UserInput;

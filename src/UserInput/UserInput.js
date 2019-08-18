import React from 'react';

class UserInput extends React.Component {
  render() {
    const { changeNameHandler, name } = this.props;

    return (
      <div>
        <input type="text" onChange={changeNameHandler} value={name} />
      </div>
    );
  }
}

export default UserInput;

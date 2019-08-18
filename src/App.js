import './App.css';
import React from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Julian',
    };
  }

  changeNameHandler = event => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <UserOutput name={name} />
        <UserOutput name={name} />
        <UserOutput name={name} />
        <UserInput changeNameHandler={this.changeNameHandler} name={name} />
      </div>
    );
  }
}

export default App;

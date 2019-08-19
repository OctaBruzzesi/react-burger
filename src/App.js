import './App.css';
import React from 'react';
import Validator from './Validator/Validator';
import Char from './Char/Char';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chars: [],
    };
  }

  changeTextHandler = event => {
    const text = event.target.value;
    const chars = text.split('');

    this.setState({
      text,
      chars,
    });
  };

  removeCharHandler = index => {
    const { chars } = this.state;

    const charsCopy = [...chars];

    charsCopy.splice(index, 1);

    const text = charsCopy.join('');

    this.setState({
      chars: charsCopy,
      text,
    });
  };

  render() {
    const { text, chars } = this.state;

    const charListComponent = chars.map((char, index) => (
      <Char
        char={char}
        key={index} // I know its wrong
        click={() => this.removeCharHandler(index)}
      />
    ));

    return (
      <div className="App">
        <input type="text" value={text} onChange={this.changeTextHandler} />
        <br />
        <Validator textLength={text.length} />
        {charListComponent}
      </div>
    );
  }
}

export default App;

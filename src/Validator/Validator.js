import React from 'react';

class Validator extends React.Component {
  render() {
    let message;
    const { textLength } = this.props;
    const TEXT_LENGTH = 10;

    if (textLength >= TEXT_LENGTH) {
      message = 'Text is long enough';
    } else {
      message = 'Text is too short';
    }

    return <p>{message}</p>;
  }
}

export default Validator;

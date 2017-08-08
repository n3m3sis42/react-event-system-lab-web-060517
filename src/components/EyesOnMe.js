import React from 'react';

class EyesOnMe extends React.Component {

  good() {
    console.log('Good!');
  }

  bad() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button type="button" onFocus={this.good} onBlur={this.bad}>
        Click Me
      </button>
    );
  }
}

export default EyesOnMe;

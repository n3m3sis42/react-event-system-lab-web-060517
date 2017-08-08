import React from 'react';

class Keypad extends React.Component {

  statusMsg = () => {
    console.log('Entering password...');
  }

  render() {

    return (
      <input type="password" onKeyUp={this.statusMsg}/>
    );
  }

}

export default Keypad;

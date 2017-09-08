import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div>
        <Hello value="hello111">
          hello111 の中身
        </Hello>

        <Hello value="hello222">
          hello222 の中身
        </Hello>
      </div>
    )
  }
}

export default App;

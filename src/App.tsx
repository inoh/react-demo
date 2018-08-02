import * as React from 'react';
import './App.css';

import Value from './components/Value';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Value small="small dayo" />
      </div>
    );
  }
}

export default App;

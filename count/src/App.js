import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cnt: 0 };
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.cnt}</h1>
        <button onClick={() => this.setState({ cnt: this.state.cnt + 1 })}>Click</button>
      </div>
    )
  }
}
export default App;

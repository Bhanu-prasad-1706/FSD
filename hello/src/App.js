import React from 'react';
import './App.css';
import HomeComponent from './HomeComponent';
let name = "bhanu";
function App() {
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <App1 name="bhanu" />
      <HomeComponent />
    </div>
  );
}
function App1(props) {
  return (
    <div>
    <h1>Welcome to React,{props.name}</h1>
    </div>
  )
}

export default App;

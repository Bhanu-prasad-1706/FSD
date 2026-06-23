import './App.css';
import React from 'react';
const students = [
  { name: 'Bhanu', age: 20, grade: 'B' },
  { name: 'Charan', age: 22, grade: 'C' },
  { name: 'Srinivas', age: 19, grade: 'S' },
];
function App() {
  return (
    <div className="App">
      <table>
        <tr><th>Name</th><th>Age</th><th>Grade</th><th>Action</th></tr>
        {students.map((s) => (
          <tr >
            <td>{s.name}</td>
            <td>{s.age}</td>
            <td>{s.grade}</td>
            <td><button>Edit</button><button>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;

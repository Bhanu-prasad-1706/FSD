import './App.css';
import React from 'react';
import { useState } from 'react';
const istudents = [
  { name: 'Bhanu', age: 20, grade: 'B' },
  { name: 'Charan', age: 22, grade: 'C' },
  { name: 'Srinivas', age: 19, grade: 'S' },
];
function App() {

  let [students, setStudents] = useState(istudents)
  let [formData, setFormData] = useState({ name: '', age: '', grade: '' })
  let [editIndex, setEditIndex] = useState(null)
  let [search, setSearch] = useState('')
  let [ascending, setAscending] = useState(true)

  const handleDelete = (index) => {
    const updatedStudents = students.filter((s, i) => i !== index)
    setStudents(updatedStudents)
  }
  const handleAdd = () => {
    setStudents([...students, formData]);
    setFormData({ name: '', age: '', grade: '' })
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleEdit = (index) => {
    setFormData(students[index])
    setEditIndex(index)
  }
  const handleUpdate = () => {
    const updatedStudents = students.map((s, i) => i === editIndex ? formData : s)
    setStudents(updatedStudents)
    setEditIndex(null)
    setFormData({ name: '', age: '', grade: '' })
  }

  const filteredStudents = students.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
  const sortedStudents = [...filteredStudents].sort((a, b) => ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
  return (
    <div className="App">
      <input className='form-control m-2' name="search" value={search} placeholder="Type to search" onChange={(e) => setSearch(e.target.value)} />
      <div className="form">
        {editIndex === null ? <h2>Add Student</h2> : <h2>Update Student</h2>}
        <input className='form-control m-2' name="name" value={formData.name} onChange={handleChange} />
        <input className='form-control m-2' name="age" value={formData.age} onChange={handleChange} />
        <input className='form-control m-2' name="grade" value={formData.grade} onChange={handleChange} />
        {editIndex === null ? (
          <button className='btn btn-success m-2' onClick={() => handleAdd()}>Add Student</button>
        ) : (
          <button className='btn btn-warning m-2' onClick={() => handleUpdate()}>Update Student</button>
        )}
      </div>
      <h2>Student List</h2>
      <table className="table table-bordered">
        <thead >
          <tr>
            <th style={{ cursor: 'pointer' }} onClick={() => setAscending(!ascending)}>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.grade}</td>
              <td>
                <button className='btn btn-primary m-2' onClick={() => handleEdit(index)}>Edit</button>
                <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

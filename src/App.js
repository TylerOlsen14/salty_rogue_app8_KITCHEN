import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  state = {
    records: [],
  }

  getRecords = async () => {
    await fetch('http://localhost:5000/')
      .then(response => {
        return response.json();
      })
      .then(data => 
        this.setState({ records: data }))
      .catch(error => console.log('Error:', error))
      }

  componentWillMount = () => {
    this.getRecords()
  }

        
  return (
    <div className="App">
      {logo}
      <div>
       {this.state.records.map((record, _id) => (
         <div>
           <h5>Client Name: {record.ClientName}</h5>
           <h5>Client Phone Number: {record.ClientPhonenNumber}</h5>
           <h5>Notes: {record.ClientNotes}</h5>
         </div>
       ))} 
      </div>
    </div>
  );
}

export default App;

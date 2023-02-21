import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import FormsflowTracer from './FormsflowTracer';


function callApi() {
  
  fetch('http://localhost:5000/listForms', { method: 'GET' })
    .then(data => data.json()) // Parsing the data into a JavaScript object
    .then(json => console.log(JSON.stringify(json))) // Displaying the stringified data in an alert popup

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormsflowTracer>
          <button onClick={callApi}>Call API</button>
        </FormsflowTracer>
      </header>
    </div>
  );
}

export default App;

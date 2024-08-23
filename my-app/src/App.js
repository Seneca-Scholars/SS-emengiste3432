import "./App.css";
import React, { useState, useEffect } from 'react';



function App() {

 const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("/api/items")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network does not work")
      }
      return response.json();
    })
    .then(info => {
      setInfo(info);
    })

    .catch(error => {
      console.error("Error fetching data, ", error);
      }
  )},
  []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {info.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.data}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
   }

export default App;

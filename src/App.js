import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './Component/Country/Country';


function App() {
  const[Countries, setCountries]=useState([])
  useEffect (() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {setCountries(data);
    //  const names = data.map(country => country.name)
    //  console.log(names);
    })
//  .catch(error =>console.log (error))
  },[])
  return (
    <div className="App">
   <h1>Country Loaded :{Countries.length}</h1>
      <ul>
        {
         Countries.map(country => <Country name = {country.name}></Country>)
        }
      </ul>
    </div>
  );
}


export default App;

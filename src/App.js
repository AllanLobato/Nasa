import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PlanetCards from './components/PlanetCards';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App-container">
      <Header />
      <PlanetCards />
    </div>
  );
};

export default App;
/*
"pl_name": "CoRoT-18 b",
"hostname": "CoRoT-18",
"disc_facility": "CoRoT",
"discoverymethod": "Transit",
"disc_year": "2011",
"pl_orbper": "1.90009000",
"pl_orbsmax": "0.028800",
"pl_masse": "1048.83900",
"pl_rade": "12.846",
"pl_dens": "2.73000",
"releasedate": "2019-10-10"*/

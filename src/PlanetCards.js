import React, { useState } from 'react';
import Data from './data.json';

const Itens = Data;

const PlanetCards = () => {
  const [busca, setBusca] = useState('');

  return (
    <div className="posts-container">
      {Data.map((item) => {
        return (
          <div Key={item.pl_name} className="post">
            <h2>
              <b>Planet Name:</b> {item.pl_name}
            </h2>
            <p>
              <b>Host Name:</b>
              {item.hostname}
            </p>
            <p>
              <b>Discovery Facility:</b> {item.disc_facility}
            </p>
            <p>
              <b>Discovery Method:</b> {item.discoverymethod}
            </p>
            <p>
              <b>Dicovery Year:</b> {item.disc_year}
            </p>
            <p>
              <b>Orbit Period:</b> {item.pl_orbper}
            </p>
            <p>
              <b>Orbit Semi-Major Axis:</b> {item.pl_orbsmax}
            </p>
            <p>
              <b>Planet Mass:</b> {item.pl_masse}
            </p>
            <p>
              <b>Planet Radius:</b> {item.pl_rade}
            </p>
            <p>
              <b>Planet Density:</b> {item.pl_dens}
            </p>
            <p>
              <b>Release Date:</b> {item.releasedate}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PlanetCards;

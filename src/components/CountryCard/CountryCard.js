import React from 'react';
// import { checkError } from '../../services/client.js';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <div className="details">
        <div className="name">{name}</div>
      </div>
      <div className="image">
        <img
          src={`https://flagcdn.com/120x90/${iso2.toLowerCase()}.png`}
          alt={`${iso2} flag`}
        ></img>
      </div>
    </div>
  );
}

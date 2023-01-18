import React from 'react';
// import { checkError } from '../../services/client.js';
import './CountryCard.css';

export default function CountryCard({ name }) {
  return (
    <div className="country-card">
      <div className="details">
        <div className="name">{name}</div>
      </div>
      <div className="image"></div>
    </div>
  );
}

import React from 'react';

export default function Controller({ setContinent, countries }) {
  const continents = [...new Set(countries.map(({ continent }) => continent))];

  return (
    <div>
      <select onChange={(e) => setContinent(e.target.value)}>
        <option value="all">all</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}

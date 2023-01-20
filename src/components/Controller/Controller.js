import React from 'react';

export default function Controller({ setContinent, countries, setSort }) {
  const continents = [...new Set(countries.map(({ continent }) => continent))];

  return (
    <div className="controller">
      <label>
        Filter by continent :
        <select onChange={(e) => setContinent(e.target.value)}>
          <option value="all">all</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sort by :
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="default">default</option>
          <option value="ascending">Name: Ascending</option>
          <option value="descending">Name: Descending</option>
        </select>
      </label>
    </div>
  );
}

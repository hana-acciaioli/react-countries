import { useState } from 'react';
import './Main.css';
import CountryCard from '../CountryCard/CountryCard';
import { useCountries } from '../../hooks/useCountries';
import Controller from '../Controller/Controller';

export default function Main() {
  const { countries, error } = useCountries();
  const [continent, setContinent] = useState('all');
  //   const [sort, setSort] = useState('');
  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );
  return (
    <main>
      <Controller className="controller" {...{ setContinent, countries }} />
      <p style={{ color: 'red' }}>{error}</p>
      <div className="main">
        {/* {filtered.sort((a, b) => (a.country > b.country ? 1 : -1))} */}
        {filtered
          //   .sort((a, b) => a.country.name > b.country.name)
          .map((country) => (
            <CountryCard key={country.id} {...country} />
          ))}
      </div>
    </main>
  );
}
// making a comment

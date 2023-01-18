import { useState } from 'react';
import './Main.css';
import CountryCard from '../CountryCard/CountryCard';
import { useCountries } from '../../hooks/useCountries';
import Controller from '../Controller/Controller';

export default function Main() {
  const { countries, error } = useCountries();
  const [continent, setContinent] = useState('all');
  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );
  return (
    <main className="main">
      <Controller {...{ setContinent, countries }} />
      <p style={{ color: 'red' }}>{error}</p>
      {filtered.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}

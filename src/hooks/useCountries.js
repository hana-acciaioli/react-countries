import React, { useEffect, useState } from 'react';
import { getCountries } from '../services/getCountries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);
  return countries;
}

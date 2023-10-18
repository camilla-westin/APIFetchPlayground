'use client'
import { useState, useEffect } from 'react';
import { WarningTypes } from '@/types/WarningTypes';
import { WarningCard } from './WarningCard';

function WarningList() {
  const [data, setData] = useState<WarningTypes[]>([]);
  const [isLoading, setLoading] = useState(true);

 useEffect(() => {
    fetch('https://opendata-download-warnings.smhi.se/ibww/api/version/1/warning.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No weather data</p>;

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <WarningCard warning={item}></WarningCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WarningList;

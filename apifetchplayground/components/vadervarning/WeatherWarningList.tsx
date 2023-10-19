'use client'
import { useState, useEffect } from 'react';
import { WeatherWarningTypes } from '@/types/WeatherWarningTypes';
import { WeatherWarningCard } from './WeatherWarningCard';

function WeatherWarningList() {
  const [data, setData] = useState<WeatherWarningTypes[]>([]);
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
    <div className="w-full">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <WeatherWarningCard warning={item}></WeatherWarningCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherWarningList;

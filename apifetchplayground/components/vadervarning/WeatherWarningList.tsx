'use client'
import { useState, useEffect } from 'react';
import { WeatherWarningTypes } from '@/types/WeatherWarningTypes';
import { WeatherWarningCard } from './WeatherWarningCard';

function WeatherWarningList(props: WeatherWarningTypes) {
  const [data, setData] = useState<WeatherWarningTypes[]>([]);
  const [isLoading, setLoading] = useState(true);
  const shownItems = props.numofitems;

 useEffect(() => {
    fetch('https://opendata-download-warnings.smhi.se/ibww/api/version/1/warning.json')
      .then((res) => res.json())
      .then((data) => {
        const limitedData = data.slice(0, shownItems);
        setData(limitedData);
        setLoading(false);
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

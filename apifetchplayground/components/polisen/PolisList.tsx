'use client'
import { useState, useEffect } from 'react';
import { PolisTypes } from '@/types/PolisTypes';
import { PolisCard } from './PolisCard';

function PolisList(props: PolisTypes) {
  const [data, setData] = useState<PolisTypes[]>([]);
  const [isLoading, setLoading] = useState(true);
  const shownItems = props.numofitems;

 useEffect(() => {
    fetch('https://polisen.se/api/events')
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
            <PolisCard polisevent={item}></PolisCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PolisList
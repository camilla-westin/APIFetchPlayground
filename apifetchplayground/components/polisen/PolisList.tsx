'use client'
import { useState, useEffect } from 'react';
import { PolisTypes } from '@/types/PolisTypes';
import { PolisCard } from './PolisCard';

function PolisList(props: PolisTypes) {
  const [data, setData] = useState<PolisTypes[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const [filteredData, setFilteredData] = useState<PolisTypes[]>([]);
  const shownItems = props.numofitems;

  useEffect(() => {
    fetch('https://polisen.se/api/events')
      .then((res) => res.json())
      .then((data) => {
        const limitedData = data.slice(0, shownItems);
        setData(limitedData);
        setFilteredData(data);
        setLoading(false);
      });
  }, []);

  const filterData = (value: string) => {
    const filtered = data.filter((item) => item.location.name === value);
    setFilteredData(filtered);
  };

  const handleSelectLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedValue(value);
    filterData(value); 
  };


  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <div className="w-full">
      <div className="mb-4">
         <select 
          value={selectedValue}
          onChange={handleSelectLocationChange}>
          <option value="">Välj plats</option>
            {data.map((item) => (
              <option key={item.id} value={item.location.name}>
                {item.location.name}
              </option>
            ))}
        </select>

      </div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <PolisCard polisevent={item}></PolisCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PolisList
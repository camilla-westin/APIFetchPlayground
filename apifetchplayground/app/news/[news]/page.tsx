'use client'
import { useState, useEffect } from 'react';
import { NewsTypes } from '@/types/NewsTypes';
import { useSearchParams } from 'next/navigation'

function NewsItemPage() {
  const [data, setData] = useState<NewsTypes | null>(null);
  const [isLoading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const id = searchParams.get('_id');

  useEffect(() => {
    if (id) {
      fetch(`https://api.krisinformation.se/v3/news/${id}`)
        .then((res) => res.json())
        .then((item) => {
          setData(item);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <h1>{data.Headline}</h1>
      <p>{data.BodyText}</p>
    </div>
  );
}

export default NewsItemPage;
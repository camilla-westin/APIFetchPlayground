'use client'
import { useState, useEffect } from 'react';
import { NewsTypes } from '@/types/NewsTypes';
import { NewsCard } from './NewsCard';

// Function to generate a URL-friendly slug
function generateSlug(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove non-word characters (e.g., special symbols)
    .replace(/\-\-+/g, '-') // Replace multiple consecutive hyphens with a single hyphen
    .replace(/^-+/, '') // Trim leading hyphens
    .replace(/-+$/, ''); // Trim trailing hyphens
}

function NewsList() {
  const [data, setData] = useState<NewsTypes[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.krisinformation.se/v3/news')
      .then((res) => res.json())
      .then((data) => {
        // Generate slugs for news items
        const newsDataWithSlugs = data.map((item: NewsTypes) => ({
          ...item,
          slug: generateSlug(item.Headline), // Use the Headline property for the slug
        }));

        setData(newsDataWithSlugs);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.Identifier}>
            <NewsCard newsitem={item}></NewsCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;

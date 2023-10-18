 
'use client'
import { useState, useEffect } from 'react'
import { NewsTypes } from '@/types/NewsTypes'
import NewsItem from './NewsItem'
 
function NewsList() {
  const [data, setData] = useState<NewsTypes[]>([]);
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://api.krisinformation.se/v3/news')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [0])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

 
  return (
    <div>
      <ul>
      {data.map((item, index) => (
          <li><NewsItem newsitem={item} key={item.Identifier}></NewsItem></li>
      ))}
      </ul>
    </div>
  )
}
export default NewsList
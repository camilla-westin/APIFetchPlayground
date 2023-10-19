import { NewsTypes } from '@/types/NewsTypes'
import Link from 'next/link'

export const NewsCard = ({ newsitem }: { newsitem: NewsTypes}) => {
    return(
      <article className="relative mb-4 md:mb-6"> 
        <div className="bg-white p-6 border-l-8 border-krisblue">
          <h2 className="text-2xl pb-2"><Link 
              href={{
                  pathname: `/krisinformation/${newsitem.slug}`,
                  query: { _id: newsitem.Identifier }
              }}>
              {newsitem.Headline}
          </Link>
          </h2>
          <p>{newsitem.PushMessage}</p>
          <span className="block pt-2">{newsitem.Updated}</span>
        </div>
      </article>
    )
  }
  
  export default NewsCard
import { NewsTypes } from '@/types/NewsTypes'

export const NewsItem = ({ newsitem }: { newsitem: NewsTypes}) => {
    return(
      <article className="relative mb-4 md:mb-10"> 
        <h2 className="text-xl">{newsitem.Headline}</h2>   
        <p>{newsitem.PushMessage}</p>
        <span>{newsitem.Updated}</span>
      </article>
    )
  }
  
  export default NewsItem
import { PolisTypes } from '@/types/PolisTypes'

export const PolisCard = ({ polisevent }: { polisevent: PolisTypes}) => {
    return (
      <article className="relative mb-4 md:mb-6"> 
        <div className="bg-white p-6 border-l-8 border-polisred">
          <h2 className="text-2xl pb-2">
            {polisevent.name}
          </h2>
          <span className="block">{polisevent.location.name}</span>     
          <a href={`https://polisen.se/${polisevent.url}`} target="_blank" className="inline-block mt-6 text-white py-2 px-4 bg-polisblue">Läs mer</a>    
        </div>
      </article>
    )
  }
  
  export default PolisCard
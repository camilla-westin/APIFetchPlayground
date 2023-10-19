import { WeatherWarningTypes } from '@/types/WeatherWarningTypes'

export const WeatherWarningCard = ({ warning }: { warning: WeatherWarningTypes}) => {
    return (
      <article className="relative mb-4 md:mb-6"> 
        <div className="bg-white p-6 border-l-8 border-vaderyellow">
          <h2 className="text-2xl pb-2">
              {warning.event.sv}   
          </h2>
          <p>{warning.warningAreas[0].areaName.sv}</p>
          <span>{warning.warningAreas[0].published}</span>
        </div>
      </article>
    )
  }
  
  export default WeatherWarningCard
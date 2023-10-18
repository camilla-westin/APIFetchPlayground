import { WarningTypes } from '@/types/WarningTypes'

export const WarningCard = ({ warning }: { warning: WarningTypes}) => {
    return (
      <article className="relative mb-4 md:mb-10"> 
        <div className="bg-white p-6">
          <h2 className="text-2xl pb-2">
              {warning.event.sv}   
          </h2>
          <p>{warning.warningAreas[0].areaName.sv}</p>
          <span>{warning.warningAreas[0].published}</span>
        </div>
      </article>
    )
  }
  
  export default WarningCard
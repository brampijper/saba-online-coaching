import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const ToolBenefitCards = ({ benefits }) => {
  
  const benefitTitle = benefits.map( 
    ({id, title}, index) => (
      <h4 key={id} className="flex flex-col gap-2 text-xs border rounded p-4 bg-gray-50 hover:bg-white">
        {` ${index+1}. ${title}`}
      </h4>
    )
  )

  return (
    <article className="flex flex-col border border-slate-500 md:m-4 rounded p-6 space-y-7 h-min text-neutral-900 md:px-8">
    
      <div className="flex flex-row gap-3 items-center">
        <FontAwesomeIcon 
          className="fa-xl text-gray-800" 
          icon={faHeart}
        />

        <h4 className={`decoration-4 text-sm align-text-bottom`}>
          Benefits
        </h4>
      </div>

      {benefitTitle}
    </article>
  )
}

export default ToolBenefitCards
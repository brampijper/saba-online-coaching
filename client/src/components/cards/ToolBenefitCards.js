import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

// import { ThemeContext } from "../themeContext";

const ToolBenefitCards = ({ benefits }) => {
  // const { accentColor, baseColor } = useContext(ThemeContext)

  const benefitTitle = benefits.map( 
    (benefit, index) => (
      <h4 className="flex flex-col gap-2 text-xs border rounded p-4 bg-gray-50 hover:bg-white">
        {` ${index+1}. ${benefit.title}`}
      </h4>
    )
  )

  return (
    <article className="flex flex-col border border-slate-500 md:m-4 rounded p-6 space-y-7 h-min text-neutral-900 md:px-8">
    
      <div className="flex flex-row gap-3 items-center">
        <FontAwesomeIcon 
          className="fa-xl text-gray-800" 
          icon={faHeart}
          // style={{color: baseColor }} 
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
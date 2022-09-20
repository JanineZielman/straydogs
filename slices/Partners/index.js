import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";

const Partners = ({ slice }) => {
  return(
    <div className='partners-section' id="section">
      <h1>{slice.primary.title}</h1>
      <div className='logos'>
        {slice.items.map((item, i) => {
          return(
            <a className='image tooltip' href={item.link?.url} target="_blank">
              <PrismicNextImage field={item.logo} layout="fill" />
              {item.tooltip &&<div class="tooltiptext"><span>{item.tooltip}</span></div>}
            </a>
          )
        })}
       
      </div>
    </div>
  )
}

export default Partners
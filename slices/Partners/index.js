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
            <div className='image'>
               <PrismicNextImage field={item.logo} layout="fill" />
            </div>
          )
        })}
       
      </div>
    </div>
  )
}

export default Partners
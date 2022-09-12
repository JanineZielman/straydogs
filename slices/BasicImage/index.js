import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";

const BasicImage = ({ slice }) => {
  return(
    <div className='basic-image'>
      {slice.primary.title &&
        <h1>{slice.primary.title}</h1>
      }
      <div className={`image ${slice.primary.size}`}>
        <PrismicNextImage field={slice.primary.image} layout="fill" />
      </div>
    </div>
  )
}

export default BasicImage
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";

const ImageText = ({ slice }) => {
  return(
    <div className='image-text' id="section">
      <div className='image'>
        <PrismicNextImage field={slice.primary.image} layout="fill" />
      </div>
      <div className='text'>
        <PrismicRichText field={slice.primary.text} />
      </div>
    </div>
  )
}

export default ImageText
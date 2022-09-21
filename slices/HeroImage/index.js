import React from 'react'
import { PrismicLink, PrismicText, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const HeroImage = ({ slice }) => {
  return(
    <div className={`hero-image ${slice.primary.size}`}>
      <div className={`img-wrapper ${slice.primary.vertical_position}`}>
        <PrismicNextImage field={slice.primary.image} layout="fill" />
      </div>
    </div>
  )
}

export default HeroImage
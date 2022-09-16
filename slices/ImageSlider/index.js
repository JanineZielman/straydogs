import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";
import Slider from "react-slick";

const ImageSlider = ({ slice }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return(
    <div className='image-slider' id="section">
      <h1>{slice.primary.title}</h1>
       <Slider {...settings}>
          {slice.items.map((item,i) => {
            return(
              <div className='image'>
                <PrismicNextImage field={item.image} layout="fill" />
              </div>
            )
          })}
       </Slider>
    </div>
  )
}

export default ImageSlider
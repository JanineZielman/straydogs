import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";

const HeroFilm = ({ slice }) => {
  return(
    <div className='hero-film'>
      <div className={`hero-image ${slice.primary.height}`}>
        <div className='img-wrapper'>
          <PrismicNextImage field={slice.primary.image} layout="fill" />
        </div>
      </div>
      <div className='film-info'>
        <div className='wrapper'>
          
          <p>{slice.primary.year}</p>
          <h1>{slice.primary.title}</h1>
          <div className='extra-info'>
            <PrismicRichText field={slice.primary.info}/>
          </div>
          {slice.items[0].label &&
            <div className='main-links'>
              {slice.items.map((item,i) => {
                return(
                  <a href={`#`}>
                    {item.label}
                  </a>
                )
              })}
            </div>
          }
          <div className='film-links'>
            <a href={`#`} className="play-button">
              {slice.primary.play_label}
            </a>
            <a href={`#`}>
              {slice.primary.read_more_label}
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HeroFilm
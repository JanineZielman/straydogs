import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";

const FilmItem = ({ slice }) => {
  console.log(slice)
  return(
    <div className='film-items'>
      <h1>{slice.primary.title}</h1>
      <div className='wrapper'>
        {slice.items.map((item, i) => {
          return(
            <div className='film-item'>
              <div className='image'>
                <PrismicNextImage field={item.image} layout="fill" />
              </div>
              <p className='green'>{item.year}</p>
              <h3>{item.title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilmItem
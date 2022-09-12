import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";

const FilmItem = ({ slice }) => {
  console.log(slice)
  return(
    <div className='film-items'>
      <h1>{slice.primary.title}</h1>
      <div className='wrapper'>
        {slice.items.map((item, i) => {
          return(
            <PrismicLink className='film-item' href={`/films/${item.link?.uid}`}>
              <div className='image'>
                <PrismicNextImage field={item.image} layout="fill" />
              </div>
              <p className='green'>{item.year}</p>
              <h3>{item.title}</h3>
            </PrismicLink>
          )
        })}
      </div>
    </div>
  )
}

export default FilmItem
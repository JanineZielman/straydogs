import React, {useEffect} from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";

const FilmItem = ({ slice }) => {
  return(
    <div className='film-items' id="section">
      <h1 id={slice.primary.sectionid}>{slice.primary.title}</h1>
      <div className='wrapper'>
        {slice.items.map((item) => {
          return(
            <PrismicLink key={item.title} className='film-item' href={item.link?.uid ? `/films/${item.link?.uid}` : `${item.link?.url}`}>
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
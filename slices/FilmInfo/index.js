import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const FilmInfo = ({ slice }) => {
  return(
    <div className='film-info-columns'>
      {slice.items.map((item,i) => {
        return(
          <div className='film-info-column'>
            <PrismicRichText field={item.text} />
          </div>
        )
      })}
    </div>
  )
}

export default FilmInfo
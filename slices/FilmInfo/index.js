import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const FilmInfo = ({ slice }) => {
  return(
    <div className='film-info-columns-wrapper' id="section">
      <p className='subtitle'>{slice.primary?.sub_title}</p>
      {slice.primary?.title &&
        <h1 className='title' id={slice.primary.sectionid}>{slice.primary?.title}</h1>
      }
      <div className='film-info-columns' id={slice.primary.sectionid}>
        {slice.items.map((item,i) => {
          return(
            <div className='film-info-column'>
              <PrismicRichText field={item.text} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilmInfo
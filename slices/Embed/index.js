import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Embed = ({ slice }) => {
  return(
    <div className={`${slice.primary.size} embed`} id="section">
      {slice.primary?.title &&
        <h1 className='title' id={slice.primary.sectionid}>{slice.primary?.title}</h1>
      }
      {slice.primary?.sub_title &&
        <p className='subtitle'>{slice.primary?.sub_title}</p>
      }
      <div dangerouslySetInnerHTML={{ __html: slice.primary.embed }} />
    </div>
  )
}

export default Embed
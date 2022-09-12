import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Embed = ({ slice }) => {
  return(
    <div className={slice.primary.size}>
      <div dangerouslySetInnerHTML={{ __html: slice.primary.embed }} />
    </div>
  )
}

export default Embed
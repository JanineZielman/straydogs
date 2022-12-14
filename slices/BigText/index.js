import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const BigText = ({ slice }) => (
  <div className='big-text' id="section">
    <PrismicRichText field={slice.primary.text}/>
  </div>
)

export default BigText
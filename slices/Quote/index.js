import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Quote = ({ slice }) => (
  <div className='quote' id="section">
    <p className='green'>{slice.primary.name}</p>
    <PrismicRichText field={slice.primary.quote}/>
  </div>
)

export default Quote
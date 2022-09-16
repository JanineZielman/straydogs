import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Columns = ({ slice }) => {
  return(
    <div className='columns-section' id="section">
      {slice.primary?.title &&
        <h1 className='title'>{slice.primary?.title}</h1>
      }
      {slice.items.map((item, i) => {
        return(
          <div className={`columns ${slice.primary?.sectionid}`}>
            <div className='column'>
              <PrismicRichText field={item.column1}/>
              {item.column_1_small_text[0]?.text && 
                <div className='column-small small'>
                  <PrismicRichText field={item.column_1_small_text}/>
                </div>
              }
            </div>
            <div className='column'>
              <PrismicRichText field={item.column2}/>
              {item.column_2_small_text[0]?.text && 
                <div className='column-small small'>
                  <PrismicRichText field={item.column_2_small_text}/>
                </div>
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Columns
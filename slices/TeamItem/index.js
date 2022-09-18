import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";
import Collapsible from 'react-collapsible';

const TeamItem = ({ slice }) => {
  console.log(slice)
  return(
    <div className='team-section' id="section">
      <h1>{slice.primary.title}</h1>
      <div className="wrapper">
        {slice.items.map((item, i) => {
          return(
            <div className="team-item">
              <div className='image'>
                <PrismicNextImage field={item.image} layout="fill" />
              </div>
              <p className='green'>{item.jobdescription}</p>
              <h3>
                <Collapsible trigger={item.name}>
                  <div className='inner-collapsible'>
                    <PrismicRichText field={item.description}/>
                  </div>
                </Collapsible>
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TeamItem
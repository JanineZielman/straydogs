import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";
import Collapsible from 'react-collapsible';

const TeamItem = ({ slice }) => {
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
              <div className='icons'>
                {item.phone &&
                  <a className='icon phone' href={`tel:${item.phone}`}></a>
                }
                {item.mail &&
                  <a className='icon mail' href={`mailto:${item.mail}`}></a>
                }
                {item.website.url &&
                  <a className='icon web' href={item.website.url} target="_blank"></a>
                }
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
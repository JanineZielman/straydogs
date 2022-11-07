import React from 'react'
import { saveAs } from 'file-saver'

const Files = ({ slice }) => {
  return(
    <div className='files' id="section">
      <p className='subtitle'>{slice.primary?.sub_title}</p>
      {slice.primary?.title &&
        <h1 className='title' id={slice.primary.sectionid}>{slice.primary?.title}</h1>
      }
      <div className='wrapper' id={slice.primary.sectionid}>
        {slice.items.map((item, i) => {
          const downloadImage = () => {
            saveAs(`${item.file?.url}`, `${item.file?.name}`)
          }
          return(
            <div className='file-item' onClick={downloadImage} id={item.file?.url} key={`file${i}`}>
              <div className='image'>
                <embed src={`${item.file?.url}`} />
              </div>
              <p className='green'>{item.download_label}</p>
              <h3>{item.title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Files
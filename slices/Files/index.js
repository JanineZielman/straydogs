import React from 'react'

const Files = ({ slice }) => {
  return(
    <div className='files' id="section">
      <p className='subtitle'>{slice.primary?.sub_title}</p>
      {slice.primary?.title &&
        <h1 className='title'>{slice.primary?.title}</h1>
      }
      <div className='wrapper'>
        {slice.items.map((item, i) => {
          return(
            <a className='file-item' href={`${item.file?.url}`} target="_blank">
              <div className='image'>
                <iframe src={item.file?.url}/>
              </div>
              <p className='green'>{item.download_label}</p>
              <h3>{item.title}</h3>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Files
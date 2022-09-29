import React, { useEffect } from 'react'
import Head from "next/head";
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";
import { linkResolver } from "../../prismicio";

const HeroFilm = ({ slice }) => {

  function playTrailer(){
    const iframe = document.getElementById('trailer');
    const player = new Vimeo.Player(iframe);

    const bgImg = document.getElementById('bgImg');
    const filmInfo = document.getElementById('filmInfo');
    const heroImg = document.getElementById('heroImg');

    iframe.style.display = 'block';
    filmInfo.style.marginLeft = '150vw';
    bgImg.style.marginLeft = '150vw';
    heroImg.style.zIndex = '1';

    player.play().then(function() {
      player.setVolume(1);
      player.setLoop(true);
    }).catch(function(error) {
        switch (error.name) {
            case 'PasswordError':
                // the video is password-protected and the viewer needs to enter the
                // password first
                break;

            case 'PrivacyError':
                // the video is private
                break;

            default:
                // some other error occurred
                break;
        }
    });
  }

  function stopTrailer(){
    const iframe = document.getElementById('trailer');
    const player = new Vimeo.Player(iframe);

    const bgImg = document.getElementById('bgImg');
    const filmInfo = document.getElementById('filmInfo');
    const heroImg = document.getElementById('heroImg');

    iframe.style.display = 'none';
    filmInfo.style.marginLeft = '0';
    bgImg.style.marginLeft = '0';
    heroImg.style.zIndex = '-1';

    player.pause();
  }

  return(
    <>
    <Head>
      <meta property="og:image" content={slice.primary.image.url} />
    </Head>
    <div className='hero-film'>
      <div className={`hero-image ${slice.primary.height}`} onClick={stopTrailer} id="heroImg">
        <div className={`img-wrapper ${slice.primary.vertical_position}`}>
          <PrismicNextImage field={slice.primary.image} layout="fill" id="bgImg"/>
          <div className='iframe-wrapper'>
            <iframe id="trailer" src={slice.primary.trailer.embed_url} width="640" height="360" frameBorder="0" allowFullScreen allow="autoplay; encrypted-media"></iframe>
          </div>
        </div>
      </div>
      <div className='film-info' id="filmInfo">
        <div className='wrapper'>
          <p>{slice.primary.year}</p>
          <h1>{slice.primary.title}</h1>
          <div className='extra-info'>
            <PrismicRichText field={slice.primary.info}/>
          </div>
          {slice.items[0]?.label &&
            <div className='main-links'>
              {slice.items.map((item,i) => {
                return(
                  <>
                    {item.link.url ?
                      <a href={item.link.url} target={ '_blank'}>
                        {item.label}
                      </a>
                    : 
                      <a href={linkResolver(item.link)}>
                        {item.label}
                      </a>
                    }
                  </>
                )
              })}
            </div>
          }
          <div className='film-links'>
            {slice.primary.trailer?.embed_url &&
              <a href={`#`} className="play-button" onClick={playTrailer}>
                {slice.primary.play_label}
              </a>
            }
            {slice.primary.play_label && slice.primary.trailer?.embed_url == null &&
              <a className="play-button">
                {slice.primary.play_label}
              </a>
            }
            {slice.primary.play_label && slice.primary.trailer?.embed_url == '' &&
              <a className="play-button">
                {slice.primary.play_label}
              </a>
            }
            {slice.primary.read_more_link ?
              <PrismicLink field={slice.primary.read_more_link}>
                {slice.primary.read_more_label}
              </PrismicLink>
            :
              <a href={slice.primary.read_more_link ? `` : `#section`}>
                {slice.primary.read_more_label}
              </a>
            }
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroFilm
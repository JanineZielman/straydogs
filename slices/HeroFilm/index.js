import React, { useEffect } from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";

const HeroFilm = ({ slice }) => {
  console.log(slice)
  // useEffect(() => {
  //   const iframe = document.getElementById('trailer');
  //   const player = new Vimeo.Player(iframe);

  //   player.on('play', function() {
  //       console.log('played the video!');
  //   });
    
  // }, []);

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
    <div className='hero-film'>
      <div className={`hero-image ${slice.primary.height}`} onClick={stopTrailer} id="heroImg">
        <div className='img-wrapper'>
          <PrismicNextImage field={slice.primary.image} layout="fill" id="bgImg"/>
          <div className='iframe-wrapper'>
            <iframe id="trailer" src={slice.primary.trailer.embed_url} width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>
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
          {slice.items[0].label &&
            <div className='main-links'>
              {slice.items.map((item,i) => {
                return(
                  <a href={item.link.url ? item.link.url : `/${item.link.uid}`} target={item.link.url && '_blank'}>
                    {item.label}
                  </a>
                )
              })}
            </div>
          }
          <div className='film-links'>
            <a href={`#`} className="play-button" onClick={playTrailer}>
              {slice.primary.play_label}
            </a>
            <a href={`#section`}>
              {slice.primary.read_more_label}
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HeroFilm
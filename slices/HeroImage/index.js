import React from 'react'
import Head from "next/head";
import { PrismicNextImage } from "@prismicio/next";

const HeroImage = ({ slice }) => {
  return(
    <>
    <Head>
      <meta property="og:image" content={slice.primary.image.url} />
    </Head>
    <div className={`hero-image ${slice.primary.size}`}>
      <div className={`img-wrapper ${slice.primary.vertical_position}`}>
        <PrismicNextImage field={slice.primary.image} layout="fill" />
      </div>
    </div>
    </>
  )
}

export default HeroImage
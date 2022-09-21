import * as prismicH from "@prismicio/helpers";
import React, {useEffect, useState} from 'react'
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { linkResolver } from "../prismicio";

import { Menu } from "./Menu";

export const Header = ({ alternateLanguages = [], navigation, settings, page }) => {
  const [sections, setSections] = useState([]); 
  useEffect(() => {
    const array = Array.prototype.slice.call(document.querySelectorAll("h1"))
    setSections(array);
  }, []);

  return (
    <>
    <div className="sidebar-wrapper">
      <div className="sidebar">
        {sections?.map((item, i) => {
          return(
            <div key={item.id}>
              {item.id &&
                <a href={`#${item.id}`}>{item.id}</a>
              }
            </div>
          )
        })}
      </div>
    </div>
    <div className="navbar">
      <PrismicLink href="/">
        {prismicH.isFilled.image(settings.data.logo) && (
          <div className="logo"><PrismicNextImage field={settings.data.logo} layout="fill" /></div>
        )}
      </PrismicLink>
      <nav>
        {navigation.data?.links.map((item) => (
          <div
            key={prismicH.asText(item.label)}
            className="nav-item"
          >
            <a href={`/${page.lang}/${item.link.uid}`}>
              <PrismicText field={item.label} />
            </a>
          </div>
        ))}
      </nav>
    </div>
    {alternateLanguages.map((lang) => {
      return(
        <div key={lang.lang} className="language">
          <a href={linkResolver(lang)}>
            <span>{lang.lang.slice(0,2)}</span>
          </a>
        </div>
      )
    })}
    <Menu 
      alternateLanguages={alternateLanguages}
      navigation={navigation}
      settings={settings}
      page={page}
    />
    </>
  );
};

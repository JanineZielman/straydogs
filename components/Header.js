import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { linkResolver } from "../prismicio";

import { Menu } from "./Menu";

export const Header = ({ alternateLanguages = [], navigation, settings }) => {
  return (
    <>
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
            <PrismicLink field={item.link}>
              <PrismicText field={item.label} />
            </PrismicLink>
          </div>
        ))}
      </nav>
    </div>
    {alternateLanguages.map((lang) => (
      <div key={lang.lang} className="language">
        <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
          <span className="sr-only">{lang.lang.slice(0,2)}</span>
        </PrismicLink>
      </div>
    ))}
    <Menu 
      alternateLanguages={alternateLanguages}
      navigation={navigation}
      settings={settings}
    />
    </>
  );
};

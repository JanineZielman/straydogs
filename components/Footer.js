import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";

export const Footer = ({ settings }) => {
  return (
    <footer>
      <PrismicRichText field={settings.data.contact} />
      <h2><PrismicText field={settings.data.siteTitle} /></h2>
    </footer>
  );
};

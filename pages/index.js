import Head from "next/head";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";

const Index = ({ page, navigation, settings}) => {
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
      page={page}
    >
      <Head>
        <title>{settings.data.siteTitle}</title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={settings.data.siteTitle} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <div className="landing-page">
        <div className="img-wrapper">
          <PrismicNextImage field={page.data.image} layout="fill" />
        </div>
        <div className="intro">
          <h1 className="big">{page.data.text}</h1>
          <PrismicLink field={page.data.link}>
            {page.data.label}
          </PrismicLink>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}

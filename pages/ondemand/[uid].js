import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";

const Page = ({ page, navigation, settings }) => {
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
      page={page}
    >
      <Head>
        <title>
          {page.data.title} |{" "}
          {settings.data.siteTitle}
        </title>
        <meta name="description" content={page.data.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={settings.data.siteTitle} />
        <meta property="og:description" content={page.data.title} />
      </Head>
      <div className="container ondemand">
        {page.data.embed &&
          <div className="trailer">
            <iframe src={page.data.embed}/>
          </div>
        }
				<div className="flex">
					<div className="info">
						<p className="year">{page.data.year}</p>
						<h1>{page.data.title}</h1>
						<div className="details">
              {page.data.genres &&
                <span>Genres:
                  {page.data.genres?.map((item,i) => (
                    <span key={`genre${i}`}> {item.genre}</span>
                  ))}
                </span>
              }
              {page.data.duration &&
							  <span>Duration: <span>{page.data.duration}</span></span>
              }
              {page.data.subtitles &&
                <span>Subtitles:
                  {page.data.subtitles?.map((item,i) => (
                    <span key={`language${i}`}> {item.language}</span>
                  ))}
                </span>
              }
              {page.data.availability &&
                <span>Availability:
                  {page.data.availability?.map((item,i) => (
                    <span key={`country${i}`}> {item.country}</span>
                  ))}
                </span>
              }
						</div>
						<div className="description">
							<PrismicRichText field={page.data.description}/>
						</div>
					</div>
					<div className="poster">
            {page.data.rent_link &&
              <div className="rent-button">
                <a href={page.data.rent_link?.url} target="_blank" rel="noreferrer">{page.data.rent_link_text}</a>
              </div>
            }
						<PrismicNextImage field={page.data.poster} layout="intrinsic" />
					</div>
				</div>
      </div>
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("ondemand", params.uid, { lang: locale });
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

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("ondemand", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}

import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import BioSection from '../components/section/bioSection';

import { getSortedPostsData } from '../lib/posts';

import utilStyles from '../styles/utils.module.scss';

// Mendapatkan getSortedPostsData dari import lib/posts
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


const section = true;

// Menggunakan allPostsData dari getStaticProps()
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Mendapatkan siteTitle dari import components/layout */}
      <Head>
        <title>Judulnya: {siteTitle}</title>
      </Head>
      {/* {section ? <BioSection></BioSection> : <LinkTreeSection></LinkTreeSection>} */}
    </Layout>
  );
}
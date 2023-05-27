import Heading from '@/components/atoms/heading/heading';
import AboutPage from '@/components/modules/about/aboutPage';
import ProductsPage from '@/components/modules/productsPage/productsPage';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About us - Booktopia</title>
      </Head>
      <Heading>About us</Heading>
      <AboutPage />
    </>
  );
}

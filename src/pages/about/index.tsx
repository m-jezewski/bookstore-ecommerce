import Heading from '@/components/layout/heading/heading';
import AboutPage from '@/components/modules/about/aboutPage';
import ProductsPage from '@/components/modules/products/productsPage/productsPage';
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

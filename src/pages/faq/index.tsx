import Heading from '@/components/layout/heading/heading';
import FaqSection from '@/components/modules/faq/faqSection';
import ProductsPage from '@/components/modules/products/productsPage/productsPage';
import Head from 'next/head';

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Booktopia - FAQ</title>
      </Head>
      <Heading>FAQ</Heading>
      <FaqSection />
    </>
  );
}

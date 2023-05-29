import { Heading } from '@/components/atoms/heading/heading';
import ProductsPage from '@/components/modules/productsPage/productsPage';
import Head from 'next/head';

export default function Books() {
  return (
    <>
      <Head>
        <title>Book collection - Booktopia</title>
      </Head>
      <Heading>Books</Heading>
      <ProductsPage />
    </>
  );
}

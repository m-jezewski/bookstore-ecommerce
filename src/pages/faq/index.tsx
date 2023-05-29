import { Heading } from '@/components/atoms/heading/heading';
import { FaqSection } from '@/components/modules/faq/faqSection';
import Head from 'next/head';

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - Booktopia</title>
      </Head>
      <Heading>FAQ</Heading>
      <FaqSection />
    </>
  );
}

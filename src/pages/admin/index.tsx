import { Heading } from '@/components/atoms/heading/heading';
import { AdminPanel } from '@/components/modules/admin/adminPanel';
import Head from 'next/head';

const AdminPanelPage = () => {
  return (
    <>
      <Head>
        <title>Admin Panel - Booktopia</title>
      </Head>
      <Heading>Admin Panel</Heading>
      <AdminPanel />
    </>
  );
};

export default AdminPanelPage;

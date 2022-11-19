import React from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import Navbar from '../comps/navbar';
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const t = await serverSideTranslations(ctx.locale || `${ctx.defaultLocale}`, ["common"])
  
  return { props: {
    ...t
  }}
};

const Page = () => {
  const t = useTranslation();
  
  return <Navbar />
};

export default Page;

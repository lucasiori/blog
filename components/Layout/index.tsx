import React from 'react';
import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer'
import Meta from '../Meta'

import { LayoutProps as Props } from './types';

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <>
      <Meta />
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
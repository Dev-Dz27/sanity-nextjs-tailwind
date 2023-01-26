import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Demo Store</title>
      </Head>
      <header>
        {/* <Header /> */}
      </header>
      <main className="">
        {/* {children} */}
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  )
}

export default Layout
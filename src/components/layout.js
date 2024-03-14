// src/components/layout.js
import * as React from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';
import * as styles from './layout.module.css';


const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
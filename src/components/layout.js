// src/components/layout.js
import * as React from 'react';
import Header from './Header/header';
import * as styles from './layout.module.css';


const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
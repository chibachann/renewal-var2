// src/components/Header/header.js
import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';



const menuItems = [
  { path: '/', label: 'ホーム' },
  { path: '/outline/', label: '会社概要' },
  { path: '/works/', label: '制作実績' },
  { path: '/estimate/', label: '料金表' },
  { path: '/homepage/', label: 'ホームページ制作' },
  { path: '/seo/', label: 'SEO対策' },
  { path: '/contact/', label: 'お問い合わせ' },
  { path: '/free-consultation/', label: '無料相談' },
];

const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.headerInner}>
        <div className={styles.headerTxt}>
          <p>
            八王子のホームページ制作・SEO対策・Web集客
            <span className={styles.headerTxtSeparator}>  </span>
            <span className={styles.headerTxtSecondLine}>ホームページで売上・集客アップを支援</span>
          </p>
        </div>

        <div className={styles.logoAndNav}>
          <div className={styles.logo}>
            <Link to="/">DegitalCreative</Link>
          </div>

          <nav className={styles.mainNav}>
            <ul className={styles.menuList}>
              {menuItems.map((item, index) => (
                <li key={index} className={styles.menuItem}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

      </div>

    </header>
  );
};

export default Header;
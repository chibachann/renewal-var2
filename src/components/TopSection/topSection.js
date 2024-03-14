// src/components/TopSection/topSection.js

import * as React from 'react';
import * as styles from './topSection.module.css';
import Button from '../Button/button';

const TopSection = () => {
  return (
    <section className={styles.topSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span><span className={styles.orange}>集客できる</span>ウェブ制作</span>
          <span>コスパも高い即納対応</span>
        </h1>
        <p className={styles.description}>
          東証一部上場企業から中小企業のSEO・運用実績。<br />
          集客から運営までトータルサポートでお客様を成功へ導きます。
        </p>
        <p className={styles.achievement}>
          ホームページ制作後の
          SEO対策・保守継続率は<br /><span>約87%</span>
        </p>
        <div className={styles.buttonWrapper}>
          <Button variant="contained" to="/seo-diagnosis">
            SEO対策の無料診断
          </Button>
          <Button variant="gradient" to="/contact">
            お問い合わせ
          </Button>
        </div>
      </div>
      <div className={styles.image}>
        <img src= "/images/haikei.png" alt = "haikei" />
      </div>
    </section>
  );
};

export default TopSection;
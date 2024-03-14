// src/components/FourthSection/fourthSection.js

import * as React from 'react';
import * as styles from './fourthSection.module.css';
import Button from '../Button/button';

const TopSection = () => {
  return (
    <section className={styles.topSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>ホームページ制作・SEO対策・Web集客</span>
          <span>お任せください</span>
        </h1>
     
        <div className={styles.buttonWrapper}>
          <Button to="/contact" variant="gradient" size="large">
            SEO対策の無料診断
          </Button>
          <Button to="/contact" variant="gradient"size="large">
            お問い合わせ
          </Button>
        </div>

        <div className={styles.explainWrapper}>
          <div className={styles.explain}>
            <p>八王子を中心に全国企業のホームページ制作・SEO対策・Web集客を行う株式会社DegitalCreativeです。弊社はただホームページの制作するだけではなく、ホームページ制作後のSEO対策・集客・運用に力を入れています。更には、表示速度やレスポンシブ対応・ユーザビリティの向上など常にユーザー目線のUI/UXを考え、Webを通して成果や効果を実感・体感できるホームページの制作を行います。</p>
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <img src= "/images/haikei3.jpg" alt = "haikei" />
      </div>
    </section>
  );
};

export default TopSection;
// src/components/FourStepsSection/fourStepsSection.js
import React from 'react';
import * as styles from './fourStepsSection.module.css';

const FourStepsSection = () => {
  return (
    <section className={styles.fourStepsSection}>
      <div className={styles.step}>
        <h3>1 戦略</h3>
        <p>事前の調査として、市場調査や各種分析を実施。その結果に基づき、制作や運用の戦略を立案します。</p>
      </div>
      <div className={styles.step}>
        <h3>2 企画・設計</h3>
        <p>ホームページの目的を明確化し、企画を立てます。お客様へのヒアリングおよび事前調査をもとに、目的に沿ったホームページを設計します。</p>
      </div>
      <div className={styles.step}>
        <h3>3 制作</h3>
        <p>お客様の目的を達成するために、企画を形にします。ホームページ制作は新規、リニューアルいずれも対応しています。</p>
      </div>
      <div className={styles.step}>
        <h3>4 公開・運用</h3>
        <p>ホームページは公開がゴールではなく、スタートです。当社ではメイン・サーバー管理から、SEO対策・広告運用までトータルサポートが可能です。</p>
      </div>
    </section>
  );
};

export default FourStepsSection;
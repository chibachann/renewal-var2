// src/components/FlowChart/flowChart.js
import * as React from 'react';
import * as styles from './flowChart.module.css';

const FlowChart = () => {
  return (
    <section className={styles.flowChart}>
      <div className={styles.title}>
        <h1>
          <span className={styles.titleEn}>FLOW CHART</span>
          <span className={styles.titleJp}>ホームページ制作までの流れ</span>
        </h1>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <h3>戦略</h3>
          <ul>
            <li>市場調査</li>
            <li>ターゲット分析</li>
            <li>競合サイト分析</li>
            <li>競合サイト分析</li>
          </ul>
        </div>
        <div className={styles.step}>
          <h3>企画・設計</h3>
          <ul>
            <li>目標設定</li>
            <li>コンテンツ企画</li>
            <li>サイトマップ設計</li>
            <li>ワイヤーフレーム</li>
            <li>取材</li>
          </ul>
        </div>
        <div className={styles.step}>
          <h3>制作</h3>
          <ul>
            <li>デザイン</li>
            <li>コーディング</li>
            <li>環境整備</li>
          </ul>
        </div>
        <div className={styles.step}>
          <h3>公開・運用</h3>
          <ul>
            <li>コンテンツ作成</li>
            <li>SEO対策</li>
            <li>デザイン変更</li>
            <li>プログラム変更</li>
            <li>広告運用</li>
            <li>SNS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FlowChart;
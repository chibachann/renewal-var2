// src/components/ThirdSection/thirdSection.js

import * as React from 'react';
import * as styles from './thirdSection.module.css';

const ThirdSection = () => {
    return (
        <section className={styles.thirdSection}>
            <div className={styles.content}>
                <h2>私たちはウェブの<span>トータルパートナーであり続けます。</span></h2>
                <p>現在ウェブの集客方法は多数存在します。
                <span>その中でもSEO対策、ネット広告、SNS、自社メディア、コンテンツ作成は大半を占めており<span className={styles.marker}>集客数に上限</span>はありません。</span>
                <span>どれを選択しどのように集中するかでその効果は変わり、活用方法一つで現状の<span className={styles.marker}>問題を一気に解決できる</span>可能性があります。</span></p>
                <p>私たちはそのような問題を一緒に解決するウェブのトータルパートナーであるとともに
                <span className={styles.marker}>ウェブで解決できる経営課題</span>に関してもサポートをさせていただきます。</p>
                <h3>ただ作るだけのホームページ制作ではありません</h3>
                <p>ホームページを作る目的はなんでしょうか？そのほとんどが集客をしたい、<span className={styles.marker}>新規取引先を獲得したい、売上アップを行いたい</span>などの目的になるかと思います。
                私たちはその<span className={styles.marker}>目的を達成する為のホームページ制作</span>を行わせていただきます。</p>
                <h3>ウェブに関する一元管理も行います</h3>
                <p>ウェブの集客や管理・運営を弊社に一任させていただくことで、お客様は本来行うべき業務に集中することができます。
                これも<span className={styles.marker}>選択と集中でより効率的により効果的</span>に業務の改善も同時に行うことができます。

                <span>私たちはお客様の成功を一緒に分かち合える存在でありたいと思います。</span></p>
                <h3>名刺代わり・即納ホームページ制作</h3>
                <p>集客はすぐに必要なく<span className={styles.marker}>今すぐホームページが必要、とにかく名刺代わりとなるホームページ</span>、既存のお客様に特化したホームページ制作を行うことも可能です。
                <span className={styles.marker}>集客だけにとらわれないホームページ制作</span>も多数請け負っております。</p>
            
            </div>

        </section>
    );
};

export default ThirdSection;
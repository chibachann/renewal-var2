// src/components/SecondSection/secondSection.js

import * as React from 'react';
import * as styles from './secondSection.module.css';

const SecondSection = () => {
    return (
        <section className={styles.secondSection}>
            <div className={styles.reasons}>
                <em>REASONS</em>
                <h2>八王子のホームページ制作・<span>SEO対策で選ばれる理由</span></h2>
            </div>
            <div className={styles.reasonItems}>
                <div className={styles.reasonItem}>
                    <img src= "/images/haikei.png" alt = "haikei" className={styles.largeImage}/>
        
                    
                    <div className={styles.reasonTitle}>
                        <span className={styles.reasonNumber}>01</span>
                        <h3>
                            <span><span className={styles.orange}>コストパフォーマンスが高い</span>
                            <br />
                            集客ができるホームページ制作</span>
                            
                        </h3>
                    </div>
                    <div className={styles.reasonContent}>
                        <p>ホームページは作っただけでは集客はできません。弊社では成果が見える・実感できるホームページ制作を行いホームページ本来の目的を達成するお手伝いを行います。
                            また、目的に応じたコーポレートサイトやECサイト・ランディングページ・サービスサイトを提案することでより集客できる・成果が実感できるホームページを制作します。</p>
                    </div>
                </div>
                <div className={styles.reasonItem}>
                    
                <img src= "/images/haikei.png" alt = "haikei" className={styles.largeImage}/>
                    
                    <div className={styles.reasonTitle}>
                        <span className={styles.reasonNumber}>02</span>
                        <h3>
                            <span>集客と運営・保守で</span>
                            <br />
                            制作後の<span className={styles.orange}>支援継続率は87%</span></h3>
                    </div>
                    <div className={styles.reasonContent}>
                    <p>ホームページ制作後に集客の一環としてSEO対策のご契約をいただくことが多いようです。弊社が担当するSEO対策は短期的なものではなく、中長期的な戦略を取り入れたSEO対策になります。その為様々な要因で上下しますが、SEO対策はホームページの集客効果を高め、自的達成の為の足掛かりとなる重要な施策になります。</p>
                    </div>
                </div>
            </div>
            <div className={styles.reasonItems}>
                <div className={styles.reasonItem}>
                    
                <img src= "/images/haikei.png" alt = "haikei" className={styles.largeImage}/>
                    
                    <div className={styles.reasonTitle}>
                        <span className={styles.reasonNumber}>03</span>
                        <h3>
                            <span><span className={styles.orange}>早いレスポンス</span>でホームページを
                            <br />
                            リアルタイムに近い更新で支援</span>
                            
                        </h3>
                    </div>
                    <div className={styles.reasonContent}>
                        <p>大手企業にはない速いレスポンスと誠実な対応をお約束します。個人商店から上場企業まで、多数のホームページ制作・SEO対策・運用を行っており、お客様の声評価でも多数のレスポンス評価をいただいております。
                            ホームページはスピードが非常に重要です。スピードと幅広い実績を組み合わせたお客様に合ったアイデア提案をさせていただきます。まずはお問い合わせからそのスピードを実感ください。</p>
                    </div>
                </div>
                <div className={styles.reasonItem}>
                    
                <img src= "/images/haikei.png" alt = "haikei" className={styles.largeImage}/>
                    
                    <div className={styles.reasonTitle}>
                        <span className={styles.reasonNumber}>04</span>
                        <h3>
                            <span>ホームページの運営・保守・管理で</span>
                            <br />
                            <span className={styles.orange}>お客様の成功をサポート</span></h3>
                    </div>
                    <div className={styles.reasonContent}>
                    <p>今すぐにホームページが必要、名刺代わりのホームページが欲しいといったご要望にもお応えできます。他の会社にお問い合わせをしたけど返答が翌日以降になってしまうといった問題もありません。営業時間外でもお問い合わせをいただければ対応できうる最善を尽くします。他社で断られた案件、納期などぜひご相談ください。</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default SecondSection;
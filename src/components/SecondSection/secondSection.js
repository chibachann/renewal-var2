// src/components/SecondSection/secondSection.js

import * as React from 'react';
import * as styles from './secondSection.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const SecondSection = () => {
    return (
        <section className={styles.secondSection}>
            <div className={styles.reasons}>
                <h2>八王子のホームページ制作・SEO対策で選ばれる理由</h2>
            </div>
            <div className={styles.reasonItems}>
                <div className={styles.reasonItem}>
                    
                        <StaticImage src="../../images/haikei.png" alt="背景画像" className={styles.largeImage} />
                    
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
                    
                        <StaticImage src="../../images/haikei.png" alt="背景画像" className={styles.largeImage} />
                    
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
                    
                        <StaticImage src="../../images/haikei.png" alt="背景画像" className={styles.largeImage} />
                    
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
                    
                    <StaticImage src="../../images/haikei.png" alt="背景画像" className={styles.largeImage} />
                    
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
            
        </section>
    );
};

export default SecondSection;
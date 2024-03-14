import * as React from "react";
import * as styles from "./footer.module.css";
import { Link } from "gatsby";


const linkSections = [
    {
      title: 'サイトマップ',
      links: [
        { path: '/', label: 'ホーム' },
        { path: '/contact/', label: 'お問い合わせ' },
        { path: '/free-consultation/', label: '無料相談' },
      ],
    },
    {
      title: '会社情報',
      links: [
        { path: '/outline/', label: '会社概要' },
        { path: '/works/', label: '制作実績' },
      ],
    },
    {
      title: 'サービス',
      links: [
        { path: '/estimate/', label: '料金表' },
        { path: '/homepage/', label: 'ホームページ制作' },
        { path: '/seo/', label: 'SEO対策' },
      ],
    },
  ];
  
  const contactLinks = [
    { path: '/contact', label: 'お問い合わせ' },
    { path: '/terms', label: '利用規約' },
    { path: '/privacy-policy', label: 'プライバシーポリシー' },
  ];

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
      <div className={styles.leftSection}>
        <Link to='/' className={styles.footerWebsiteTitle}>DegitalCreative</Link>
      </div>
      <div className={styles.rightSection}>
        {linkSections.map((section) => (
          <div key={section.title} className={styles.subSection}>
            <h3 className={styles.footerSectionTitle}>{section.title}</h3>
            {section.links.map(link => (
              <Link key={link.path} to={link.path} className={styles.footerLinkItem}>{link.label}</Link>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className={styles.footerBottom}>
      <div className={styles.footerLinks}>
        {contactLinks.map(link => (
          <Link key={link.path} to={link.path} className={styles.footerBottomLinkItem}>{link.label}</Link>
        ))}
      </div>
      <p>2024 © デジタルクリエイティブ株式会社 All Right Reserved.</p>
    </div>
    </footer>
);

export default Footer;
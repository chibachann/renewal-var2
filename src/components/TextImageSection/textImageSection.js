// src/components/TextImageSection/textImageSection.js
import * as React from 'react';
import * as styles from './textImageSection.module.css';

const TextImageSection = ({ subtitle, title, text, imageUrl, imageAlt }) => {
  return (
    <section className={styles.textImageSection}>
      <div className={styles.textSection}>
        <p className={styles.subtitle}>{subtitle}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.imageSection}>
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </section>
  );
};

export default TextImageSection;
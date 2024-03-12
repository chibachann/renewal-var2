// src/components/Button/button.js
import * as React from 'react';
import * as styles from './button.module.css';
import { Link } from 'gatsby';

const Button = ({ children, variant = 'contained', to }) => {
  const buttonClassName = `${styles.button} ${styles[variant]}`;

  return (
    <Link to={to} className={buttonClassName}>
      {children}
    </Link>
  );
};

export default Button;
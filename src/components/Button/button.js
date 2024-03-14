// src/components/Button/button.js
import * as React from 'react';
import * as styles from './button.module.css';
import { Link } from 'gatsby';

const Button = ({ children, variant = 'contained', to, size = 'medium' }) => {
  const buttonClassName = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <Link to={to} className={buttonClassName}>
      {children}
    </Link>
  );
};

export default Button;
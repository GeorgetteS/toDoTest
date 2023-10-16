import React from 'react';

import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>Todo App</h1>
      </header>
      <main className={styles.content}>{children}</main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2023 Todo App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

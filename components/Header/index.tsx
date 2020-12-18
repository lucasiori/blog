import React from 'react';

import styles from './styles.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <span>Lucas Iori</span>
        </div>

        <nav className={styles.navMenu}>
          <ul className={styles.menu}>
            <li className={styles.activeMenu}><a href="#">home</a></li>
            <li><a href="#">categorias</a></li>
            <li><a href="#">sobre mim</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
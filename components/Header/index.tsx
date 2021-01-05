import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <span>Lucas Iori</span>
        </div>

        <nav className={styles.navMenu}>
          <ul className={styles.menu}>
            <li className={styles.activeMenu}>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/#categories">categorias</Link>
            </li>
            <li>
              <Link href="/#about-me">sobre mim</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

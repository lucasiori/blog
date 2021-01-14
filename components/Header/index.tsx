import React, { useState } from 'react'
import Link from 'next/link'

import logoImg from '../../public/assets/images/logo.png'

import styles from './styles.module.css'

const Header: React.FC = () => {
  const [mobileMenuIsExpanded, setMobileMenuIsExpanded] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link href="/">
            <img src={logoImg} alt="Lucas Iori" />
          </Link>
        </div>

        <nav className={styles.navMenu}>
          <ul className={styles.menu}>
            <li>
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

        <nav
          className={styles.mobileNavMenu}
          aria-expanded={mobileMenuIsExpanded}
          onClick={() => setMobileMenuIsExpanded(!mobileMenuIsExpanded)}
        >
          <button type="button" className={styles.burguerMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={styles.mobileMenu}>
            <ul>
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/#categories">categorias</Link>
              </li>
              <li>
                <Link href="/#about-me">sobre mim</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

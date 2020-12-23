import React from 'react'

import EmailIcon from '../../public/assets/icons/email.svg'
import LinkedinIcon from '../../public/assets/icons/linkedin.svg'
import GithubIcon from '../../public/assets/icons/github.svg'

import styles from './styles.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <span>Lucas Iori</span>
        </div>

        <div className={styles.message}>
          <strong>
            <strong>{'< '}</strong>
            Feito por um dev para devs
            <strong>{' />'}</strong>
          </strong>
        </div>

        <div className={styles.socialNetworks}>
          <a href="mailto:lucasferiori@gmail.com">
            <EmailIcon />
          </a>

          <a href="https://www.linkedin.com/in/lucas-iori/">
            <LinkedinIcon />
          </a>

          <a href="https://github.com/lucasiori">
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

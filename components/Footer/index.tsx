import React from 'react'

import emailIcon from '../../public/assets/icons/email.png'
import linkedinIcon from '../../public/assets/icons/linkedin.png'
import githubIcon from '../../public/assets/icons/github.png'

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
          <a href="mailto:lucasferiori@gmail.com" title="E-mail">
            <img src={emailIcon} alt="E-mail" />
          </a>

          <a href="https://www.linkedin.com/in/lucas-iori/" title="Linkedin">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>

          <a href="https://github.com/lucasiori" title="Github">
            <img src={githubIcon} alt="Github" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

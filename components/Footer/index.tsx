import EmailImg from '../../public/assets/icons/email.svg';
import LinkedinImg from '../../public/assets/icons/linkedin.svg';
import GithubImg from '../../public/assets/icons/github.svg';

import styles from './styles.module.css'

const Footer = () => {
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
            <EmailImg />
          </a>

          <a href="https://www.linkedin.com/in/lucas-iori/">
            <LinkedinImg />
          </a>

          <a href="https://github.com/lucasiori">
            <GithubImg />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
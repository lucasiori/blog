import React from 'react';

import { HeroPostProps as Props } from './types'

import styles from './styles.module.css';

const HeroPost: React.FC<Props> = ({ post }) => {
  return (
    <section className={styles.heroPost}>
      <div className={styles.heroPostImage}>
        <img src={post.coverImage} alt="imagem"/>
      </div>

      <div className={styles.heroPostData}>
        <div className={styles.heroPostLastArticle}>
          <span>Último Artigo</span>
        </div>

        <h1 className={styles.heroPostTitle}>{post.title}</h1>

        <p className={styles.heroPostExcerpt}>{post.excerpt}</p>

        <a href={post.slug} className={styles.heroPostReadMore}>
          leia o artigo completo
        </a>
      </div>
    </section>
  )
}

export default HeroPost

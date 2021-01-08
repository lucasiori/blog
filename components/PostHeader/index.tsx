import React, { useMemo } from 'react'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import publishDateIcon from '../../public/assets/icons/publish-date.png'

import { PostHeaderProps as Props } from './types'

import styles from './styles.module.css'

const PostHeader: React.FC<Props> = ({ post }) => {
  const formattedDate = useMemo((): string => {
    return post
      ? format(parseISO(post.updatedAt), "dd 'de' MMMM 'de' yyyy", {
          locale: ptBR
        })
      : ''
  }, [post])

  return (
    <header className={styles.postHeader}>
      <h1 className={styles.postHeaderTitle}>{post.title}</h1>

      <div>
        <div className={styles.postHeaderImage}>
          <img src={post.coverImage} alt={post.title} />
        </div>

        <div className={styles.postHeaderData}>
          <div
            className={`${styles.postHeaderInformation} ${styles.postHeaderAuthor}`}
          >
            <img src={post.author.picture} alt={post.author.name} />
            <h4>{post.author.name}</h4>
          </div>

          <div
            className={`${styles.postHeaderInformation} ${styles.postHeaderCategory}`}
          >
            <img src={post.category.badgeIcon} alt={post.category.title} />
            <h4>{post.category.title}</h4>
          </div>

          <div
            className={`${styles.postHeaderInformation} ${styles.postHeaderPublishDate}`}
          >
            <img src={publishDateIcon} alt="Data de publicação" />
            <h5>{formattedDate}</h5>
          </div>

          <div
            className={`${styles.postHeaderInformation} ${styles.postHeaderReadTime}`}
          >
            <img src="/assets/icons/read-time.png" alt="Tempo de leitura" />
            <h5>{`${post.readTime} ${
              post.readTime === 1 ? 'minuto' : 'minutos'
            }`}</h5>
          </div>

          {/* <div
            className={`${styles.postHeaderInformation} ${styles.postHeaderViews}`}
          >
            <img src="/assets/icons/views.png" alt="Visualizações" />
            <h5>540</h5>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default PostHeader

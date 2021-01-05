import React from 'react'

import { PostItemProps as Props } from './types'

import styles from './styles.module.css'

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <a href={post.slug} className={styles.postItem}>
      <div className={styles.postItemImage}>
        <img src={post.coverImage} alt={post.title} />
      </div>

      <h3 className={styles.postItemTitle}>{post.title}</h3>

      <h5 className={styles.postItemCategory}>{post.category.title}</h5>
    </a>
  )
}

export default PostItem

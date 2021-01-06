import React from 'react'
import Link from 'next/link'

import { CategoryItemProps as Props } from './types'

import styles from './styles.module.css'

const CategoryItem: React.FC<Props> = ({ category }) => {
  return (
    <Link href={category.slug}>
      <div
        className={styles.categoryItem}
        title={category.title}
        data-category-title={category.title.toLowerCase()}
      >
        <img src={category.badgeIcon} alt={category.title} />
      </div>
    </Link>
  )
}

export default CategoryItem

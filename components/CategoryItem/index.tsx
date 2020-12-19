import React from 'react';

import getCategoryIcon from '../../utils/getCategoryIcon';

import { CategoryItemProps as Props } from './types';

import styles from './styles.module.css';

const CategoryItem: React.FC<Props> = ({ categoryName }) => {
  return (
    <a 
      href={`categories/${categoryName}`}
      className={styles.categoryItem}
      data-category-name={categoryName}
    >
      {getCategoryIcon(categoryName)}
    </a>
  )
}

export default CategoryItem;
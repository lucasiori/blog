import React, { useMemo } from 'react';

import HeroPost from '../../components/HeroPost';
import PostItem from '../../components/PostItem';

import { HomepageProps as Props } from './types'

import styles from './styles.module.css'

const Homepage: React.FC<Props> = ({ posts }) => {
  const heroPost = useMemo(() => {
    return posts[0];
  }, [posts]);

  const listPosts = useMemo(() => {
    return posts.filter((_, index) => index !== 0);
  }, [posts]);

  return (
    <div className={styles.homepageContainer}>
      {heroPost && <HeroPost post={heroPost} />}

      {listPosts.length > 0 && (
        <section className={styles.homepagePostsList}>
          {listPosts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </section>
      )}
    </div>
  )
}

export default Homepage;
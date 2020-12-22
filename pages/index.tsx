import React from 'react';
import { getAllCategories, getAllPosts } from '../lib/api';

import Homepage from './home';

import Category from '../types/Category';
import Post from '../types/Post';

interface Props {
  categories: Category[];
  posts: Post[];
}

const Index: React.FC<Props> = ({ categories, posts }) => {
  return <Homepage categories={categories} posts={posts} />
}

export const getStaticProps = async () => {
  const categories = getAllCategories();

  const posts = getAllPosts(9);

  return {
    props: { 
      categories,
      posts
    },
  };
}

export default Index
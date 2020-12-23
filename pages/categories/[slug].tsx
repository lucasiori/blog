import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { getAllCategories, getPostsByCategory } from '../../lib/api'

import Layout from '../../components/Layout'
import HeroPost from '../../components/HeroPost'
import PostItem from '../../components/PostItem'
import CategoryItem from '../../components/CategoryItem'

import CategoryProps from '../../types/Category'
import PostProps from '../../types/Post'
import {
  CategoriesProps as Props,
  CategoriesParamsProps as ParamsProps
} from './types'

import styles from './styles.module.css'

const Category: React.FC<Props> = ({ categories, posts }) => {
  const router = useRouter()
  const { slug } = router.query

  const heroPost = useMemo((): PostProps => {
    return posts[0]
  }, [posts])

  const listPosts = useMemo((): PostProps[] => {
    return posts.filter((_, index) => index !== 0)
  }, [posts])

  const currentCategory = useMemo((): CategoryProps | undefined => {
    return categories.find(category => category.id === slug)
  }, [categories])

  if (!currentCategory) {
    // TODO - Show error page
    return <></>
  }

  return (
    <Layout pageTitle={`Lucas Iori Blog - ${slug}`}>
      <section className={styles.hero} data-category-title={slug}>
        <img src={currentCategory.image} alt={currentCategory.title} />
      </section>

      <div className={styles.container}>
        {heroPost && <HeroPost post={heroPost} />}

        {listPosts.length > 0 && (
          <section className={styles.postsList}>
            {listPosts.map(post => (
              <PostItem key={post.slug} post={post} />
            ))}
          </section>
        )}

        <section className={styles.categoriesList}>
          <h2>Outras Categorias</h2>

          <div>
            {categories
              .filter(category => category.id !== currentCategory.id)
              .map(category => (
                <CategoryItem key={category.title} category={category} />
              ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }: ParamsProps) {
  const { slug } = params

  const categories = getAllCategories()
  const currentCategory = categories.find(category => category.id === slug)

  const posts = currentCategory ? getPostsByCategory(currentCategory.id) : []

  return {
    props: {
      categories,
      posts
    }
  }
}

export async function getStaticPaths() {
  const categories = getAllCategories()

  return {
    paths: categories.map(category => {
      return {
        params: { slug: category.id }
      }
    }),
    fallback: false
  }
}
export default Category

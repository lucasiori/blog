import React from 'react'
import { getPostBySlug, getAllPosts } from '../../api/posts'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

import Layout from '../../components/Layout'
import PostHeader from '../../components/PostHeader'

import {
  DefaultParamsProps as ParamsProps,
  DefaultStaticProps as StaticProps,
  DefaultStaticPaths as StaticPaths
} from '../../types'
import { PostsProps as Props } from './types'

import styles from './styles.module.css'
import PostItem from '../../components/PostItem'

const Post: React.FC<Props> = ({ post, morePosts }) => {
  // const router = useRouter()
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  if (!post) {
    // TO-DO - Show Shimmer Effect
    return <></>
  }

  return (
    <Layout pageTitle={`Lucas Iori - ${post.title || ''}`}>
      <article className={styles.postContainer}>
        <Head>
          <title>{post.title}</title>

          {post && post.ogImage && post.ogImage.url && (
            <meta property="og:image" content={post.ogImage.url} />
          )}
        </Head>

        <PostHeader post={post} />

        <section
          className={styles.postBody}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></section>

        {morePosts && morePosts.length > 0 && (
          <section className={styles.morePosts}>
            <h2>Outros Artigos</h2>

            <div>
              {morePosts.map(morePost => (
                <PostItem key={morePost.title} post={morePost} />
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  )
}

export default Post

export async function getStaticProps({
  params
}: ParamsProps): Promise<StaticProps> {
  const post = getPostBySlug(params.slug, [], true)
  const morePosts = getAllPosts(4)

  const content = await markdownToHtml(post.content)

  console.log(morePosts)

  return {
    props: {
      post: {
        ...post,
        content
      },
      morePosts
    }
  }
}

export async function getStaticPaths(): Promise<StaticPaths> {
  const posts = getAllPosts()

  console.log(posts)

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug.replace('/posts/', '')
        }
      }
    }),
    fallback: false
  }
}

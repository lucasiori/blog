import Homepage from './Homepage';

import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index: React.FC<Props> = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Lucas Iori Blog</title>
      </Head>
      <Homepage posts={allPosts} />
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'category'
  ])

  return {
    props: { allPosts },
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */

export interface AuthorProps {
  name: string
  picture: string
}

export interface CategoryProps {
  id: string
  title: string
  slug: string
  badgeIcon: string
  image: string
  position: number
}

export interface PostProps {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  coverImage: string
  readTime: number
  author: AuthorProps
  category: Pick<CategoryProps, 'id' | 'title' | 'badgeIcon'>
  ogImage: {
    url: string
  }
}

export interface DefaultParamsProps {
  params: {
    slug: string
  }
}

export interface DefaultStaticProps {
  props: any
}

export interface DefaultStaticPaths {
  paths: DefaultParamsProps[]
  fallback: boolean
}

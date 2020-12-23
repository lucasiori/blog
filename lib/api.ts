import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import Category from '../types/Category'
import Post from '../types/Post'

interface ItemProps {
  [key: string]: string
}

interface FileContentProps {
  data: {
    [key: string]: any
  }
  content: string
}

const categoriesDirectory = join(process.cwd(), '_categories')
const postsDirectory = join(process.cwd(), '_posts')

function getSlugs(directory: string): string[] {
  return fs.readdirSync(directory)
}

function getFileContent(slug: string, directory: string): FileContentProps {
  const fullPath = join(directory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  return matter(fileContents)
}

export function getPostBySlug(slug: string, fields: string[] = []): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const { data, content } = getFileContent(realSlug, postsDirectory)

  const items: ItemProps = {}

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = `/posts/${realSlug}`
    }

    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items as Post
}

export function getAllPosts(limit?: number): Post[] {
  const slugs = getSlugs(postsDirectory)
  const fields = ['title', 'slug', 'coverImage', 'excerpt', 'category']

  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => {
      return (post1.date || '') > (post2.date || '') ? -1 : 1
    })

  return !limit ? posts : posts.filter((_, index) => index <= limit)
}

export function getPostsByCategory(categoryId: string): Post[] {
  const posts = getAllPosts()

  return posts.filter(post => post.category === categoryId)
}

export function getCategoryBySlug(
  slug: string,
  fields: string[] = []
): Category {
  const realSlug = slug.replace(/\.md$/, '')
  const { data } = getFileContent(realSlug, categoriesDirectory)

  const items: ItemProps = {}

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = `/categories/${realSlug}`
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items as Category
}

export function getAllCategories(): Category[] {
  const slugs = getSlugs(categoriesDirectory)
  const categoryFields = [
    'id',
    'title',
    'slug',
    'badgeIcon',
    'image',
    'position'
  ]

  const categories = slugs
    .map(slug => getCategoryBySlug(slug, categoryFields))
    .sort((category1, category2) => {
      return (category1.position || '') > (category2.position || '') ? -1 : 1
    })

  return categories
}

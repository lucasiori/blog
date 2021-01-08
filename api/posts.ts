/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

interface Item {
  [key: string]: any
}

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
  allFields = false
): Item {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Item = {}

  if (!allFields && fields.length <= 0) {
    fields = [
      'id',
      'slug',
      'title',
      'excerpt',
      'coverImage',
      'category',
      'createdAt',
      'updatedAt'
    ]
  }

  if (allFields) {
    fields = [
      'id',
      'slug',
      'title',
      'excerpt',
      'content',
      'coverImage',
      'readTime',
      'category',
      'author',
      'ogImage',
      'createdAt',
      'updatedAt'
    ]
  }

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

  return items
}

export function getAllPosts(limit?: number, excludePost?: number): Item[] {
  let slugs = getPostSlugs()

  if (limit) {
    if (limit === 0) {
      slugs = []
    } else if (slugs.length > limit - 1) {
      slugs = slugs.slice(0, limit - 1)
    }
  }

  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) => (post1.updatedAt > post2.updatedAt ? -1 : 1))
    .filter(post => post.id !== excludePost)

  return posts
}

export function getPostsByCategory(
  categoryId: string,
  limit?: number,
  excludePost?: number
): Item[] {
  const posts = getAllPosts(limit, excludePost)

  return posts.filter(post => post.category.id === categoryId)
}

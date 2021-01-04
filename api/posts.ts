import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

interface Item {
  [key: string]: string
}

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []): Item {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Item = {}

  if (fields.length <= 0) {
    fields = ['slug', 'title', 'excerpt', 'category', 'date', 'coverImage']
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

export function getAllPosts(limit?: number): Item[] {
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
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}

export function getPostsByCategory(categoryId: string, limit?: number): Item[] {
  const posts = getAllPosts(limit)

  return posts.filter(post => post.category === categoryId)
}

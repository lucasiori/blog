/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

interface Item {
  [key: string]: any
}

const categoriesDirectory = join(process.cwd(), '_categories')

export function getCategorySlugs(): string[] {
  return fs.readdirSync(categoriesDirectory)
}

export function getCategoryBySlug(slug: string): Item {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(categoriesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  const items: Item = {}
  const fields = [
    'id',
    'slug',
    'title',
    'badgeIcon',
    'image',
    'position',
    'createdAt',
    'updatedAt'
  ]

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = `/categories/${realSlug}`
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllCategories(): Item[] {
  const slugs = getCategorySlugs()

  const categories = slugs
    .map(slug => getCategoryBySlug(slug))
    .sort((category1, category2) =>
      category1.position > category2.position ? 1 : -1
    )

  return categories
}

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

interface Item {
  [key: string]: string;
}

const categoriesDirectory = join(process.cwd(), '_categories');
const postsDirectory = join(process.cwd(), '_posts')

export function getSlugs(directory: string) {
  return fs.readdirSync(directory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Item = {}

  fields.forEach((field) => {
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

export function getAllPosts(limit?: number) {
  const slugs = getSlugs(postsDirectory)
  const fields = [
    'title',
    'slug',
    'coverImage',
    'excerpt',
    'category'
  ]

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return !limit ? posts : posts.filter((_, index) => index <= limit);
}

export function getPostsByCategory(categoryId: string) {
  const posts = getAllPosts();

  return posts.filter((post) => post.category === categoryId);
}

export function getCategoryBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(categoriesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  const items: Item = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = `/categories/${realSlug}`
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllCategories() {
  const slugs = getSlugs(categoriesDirectory)
  const categoryFields = [
    'id',
    'title',
    'slug',
    'badgeIcon',
    'image',
    'position',
  ];

  const categories = slugs
    .map((slug) => getCategoryBySlug(slug, categoryFields))
    .sort((category1, category2) => (category1.position > category2.position ? 1 : -1));

  return categories;
}

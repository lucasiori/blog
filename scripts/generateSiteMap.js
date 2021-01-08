/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const { join } = require('path')
const matter = require('gray-matter')
const globby = require('globby')
const { format } = require('date-fns')
const xmlFormat = require('xml-formatter')

function getLastModification(slug) {
  const postsDirectory = join(process.cwd(), '_posts')
  const categoriesDirectory = join(process.cwd(), '_categories')
  const realSlug = slug.split('/')[1]

  let fullPath = ''

  if (slug.includes('categories')) {
    fullPath = join(categoriesDirectory, `${realSlug}.md`)
  } else {
    fullPath = join(postsDirectory, `${realSlug}.md`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  return data.updatedAt
}

async function generateSiteMap() {
  const baseUrl =
    'https://5ff6592e8bb98500075e436a--vibrant-pasteur-32b8cc.netlify.app'

  const pages = await globby(['_categories/*.md', '_posts/*.md'])
  pages.unshift('', 'home')

  const sitemapContent = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map(page => {
            const isHomePage = page === '' || page === 'home'
            const isPostPage = page.includes('posts')
            const isCategoryPage = page.includes('categories')

            let route = ''
            let lastModification = ''
            let priority = ''
            const changeFrequency = isCategoryPage ? 'anualy' : 'weekly'

            if (isHomePage) {
              route = page
              lastModification = format(new Date(), 'yyyy-MM-dd')
            } else {
              route = page.replace('.md', '').replace('_', '')
              lastModification = getLastModification(route)
            }

            if (isHomePage) {
              priority = '0.8'
            } else if (isPostPage) {
              priority = '1.0'
            } else if (isCategoryPage) {
              priority = '0.5'
            }

            return `
              <url>
                <loc>${`${baseUrl}/${route}`}</loc>
                <lastmod>${lastModification}</lastmod>
                <changefreq>${changeFrequency}</changefreq>
                <priority>${priority}</priority>
              </url>
            `
          })
          .join('')}
      </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', xmlFormat(sitemapContent))
}

generateSiteMap()

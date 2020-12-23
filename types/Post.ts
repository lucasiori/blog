import Author from './Author'

export default interface Post {
  slug?: string
  title?: string
  date?: string
  coverImage?: string
  author?: Author
  excerpt?: string
  content?: string
  category?: string
}

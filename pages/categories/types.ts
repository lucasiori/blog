import Category from '../../types/Category'
import Post from '../../types/Post'

export interface CategoriesProps {
  posts: Post[]
  categories: Category[]
}

export interface CategoriesParamsProps {
  params: {
    slug: string
  }
}

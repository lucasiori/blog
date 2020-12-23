import Category from '../types/Category'
import Post from '../types/Post'

export interface HomepageProps {
  posts?: Post[]
  categories?: Category[]
}

export interface HomepageStaticProps {
  props: HomepageProps
}

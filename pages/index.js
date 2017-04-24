import Page from '../layouts/main'
import Posts from '../components/posts'
import Slider from '../components/slider'
import fetch from 'isomorphic-fetch'
const config = require('../env.json')[process.env.NODE_ENV || 'development']

const Index = ({ posts }) => (
  <Page title="Ouracademy">
    <Slider backgroundImage='/static/img/banner.png' />
    <Posts posts={posts} />
  </Page>
)

Index.getInitialProps = async () => {
  const res = await fetch(config.API_BASE + '/posts')
  const response = await res.json()

  console.log(`Post data fetched. Count: ${response.data.length}`)

  return {
    posts: response.data
  }
}

export default Index
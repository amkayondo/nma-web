import type { NextPage } from 'next'
import Image from 'next/image'
import PageHead from '../components/PageHead'
import PageLayOut from '../components/PageLayOut'

const Home: NextPage = () => {
  return (
    <div>
      <PageHead pageName="Login" />
      <PageLayOut fluid>
        <h1>hello</h1>
      </PageLayOut>
    </div>
  )
}

export default Home

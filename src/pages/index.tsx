import Header from '@/layouts/Header'
import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'

import Banner from '@/containers/Home/Banner'
import HomeTitle from '@/components/Title/HomeTitle'
import Aboutme from '@/containers/Home/Aboutme'
import Works from '@/containers/Home/Works'
import Stats from '@/containers/Home/Stats'
import Portfolio from '@/containers/Home/Portfolio'

export default function Home() {
  return (
    <>
      <Header title='Home' />
      <Navbar />
      <Banner />
      <HomeTitle title="Who I Am" />
      <Aboutme />
      <HomeTitle title="Works" />
      <Works />
      <HomeTitle title="Stats" />
      <Stats />
      <HomeTitle title="Portfolio" />
      <Portfolio />
      <Footer />
    </>
  )
}

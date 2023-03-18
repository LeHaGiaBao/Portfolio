import Header from '@/layouts/Header'
import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'

import Banner from '@/containers/Banner'
import HomeTitle from '@/components/Title/HomeTitle'
import Aboutme from '@/containers/Aboutme'
import Services from '@/containers/Services'

export default function Home() {
  return (
    <>
      <Header title='Home' />
      <Navbar />
      <Banner />
      <HomeTitle title="About me" />
      <Aboutme />
      <HomeTitle title="Services" />
      <Services />
      <HomeTitle title="Portfolio" />
      <HomeTitle title="Contact" />
      <Footer />
    </>
  )
}

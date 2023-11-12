import Footer from '@/layouts/Footer'
import AboutMe from '@/containers/Home/Aboutme'
import Doing from '@/containers/Home/Doing'
import Stats from '@/containers/Home/Stats'
import Portfolio from '@/containers/Home/Portfolio'
import EndContainer from '@/components/EndContainer/EndContainer'
import Navbar from '@/layouts/Navbar'
import Banner from '@/containers/Home/Banner'
import HomeTitle from '@/components/Title/HomeTitle'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <HomeTitle title='Who I Am' />
      <AboutMe />
      <HomeTitle title="What I Do" />
      <Doing />
      <HomeTitle title="My Stats" />
      <Stats />
      <Portfolio />
      <EndContainer />
      <Footer />
    </>
  )
}

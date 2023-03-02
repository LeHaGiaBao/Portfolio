import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Banner from '../containers/Banner'
import About from '../containers/About'
import Divider from '../assets/image/Divider.gif'

export default function Home() {
  return (
    <>
      <Head>
        <title>Le Ha Gia Bao | Porfolio</title>
      </Head>
      <Navbar />
      <Banner />
      <Image src={Divider} alt='image' />
      <About />
      <Footer />
    </>
  )
}

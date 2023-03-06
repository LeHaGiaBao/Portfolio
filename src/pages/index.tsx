import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'
import Banner from '@/containers/Banner'
import Aboutme from '@/containers/Aboutme'
import Divider from '../assets/image/Divider.gif'
import Technology from '@/containers/Technology'
import Work from '@/containers/Work'

export default function Home() {
  return (
    <>
      <Head>
        <title>Le Ha Gia Bao | Home</title>
      </Head>
      <Navbar />
      <Banner />
      <Image src={Divider} alt='image' />
      <Aboutme />
      <Technology />
      <Work />
      <Footer />
    </>
  )
}

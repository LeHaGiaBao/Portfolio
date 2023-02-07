import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Banner from '../containers/Banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Le Ha Gia Bao | Porfolio</title>
      </Head>
      <Navbar />
      <Banner />
      <Footer />
    </>
  )
}

import Head from 'next/head'
import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title'
import Footer from '@/layouts/Footer'
import Aboutme from '@/containers/Aboutme'
import Timeline from '@/components/Timeline'

export default function About() {
	return (
		<>
			<Head>
				<title>Le Ha Gia Bao | About</title>
			</Head>
			<Navbar />
			<Title title="About me" />
			<Aboutme />
			<Timeline />
			<Footer />
		</>
	)
}

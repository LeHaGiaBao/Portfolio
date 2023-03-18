import Header from '@/layouts/Header'
import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'
import Title from '@/components/Title/Title'

export default function About() {
	return (
		<>
			<Header title='About' />
			<Navbar />
			<Title title="About me" />
			<Footer />
		</>
	)
}

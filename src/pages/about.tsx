import Header from '@/layouts/Header'
import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title/Title'
import AboutMe from '@/containers/About/AboutMe'
import Footer from '@/layouts/Footer'
import HeadingTitle from '@/components/Title/HeadingTitle'

export default function About() {
	return (
		<>
			<Header title='About' />
			<Navbar />
			<Title title="About me" />
			<AboutMe />
			<HeadingTitle title="A little bit about me" />
			<HeadingTitle title="Education" />
			<HeadingTitle title="Experience" />
			<Footer />
		</>
	)
}

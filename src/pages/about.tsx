import Header from '@/layouts/Header'
import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title/Title'
import AboutMe from '@/containers/About/AboutMe'
import Footer from '@/layouts/Footer'
import HeadingTitle from '@/components/Title/HeadingTitle'
import Education from '@/containers/About/Education'
import Timeline from '@/containers/About/Timeline'
import Certification from '@/containers/About/Certification'

export default function About() {
	return (
		<>
			<Header title='About' />
			<Navbar />
			<Title title="About me" />
			<AboutMe />
			<HeadingTitle title="A little bit about me" />
			<HeadingTitle title="Education" />
			<Education />
			<HeadingTitle title="Experience" />
			<Timeline />
			<HeadingTitle title="Volunteering" />
			<HeadingTitle title="Certification" />
			<Certification />
			<HeadingTitle title="Honors & awards" />
			<Footer />
		</>
	)
}

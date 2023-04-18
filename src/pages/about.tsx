import Header from '@/layouts/Header'
import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'
import Title from '@/components/Title/Title'
import AboutMe from '@/containers/About/AboutMe'
import HeadingTitle from '@/components/Title/HeadingTitle'
import ALittleBit from '@/containers/About/ALittelBit'
import Education from '@/containers/About/Education'
import Timeline from '@/containers/About/Timeline'
import Volunteering from '@/containers/About/Volunteering'
import Contest from '@/containers/About/Contest'
import Achievement from '@/containers/About/Achievement'
import Certification from '@/containers/About/Certification'

export default function About() {
	return (
		<>
			<Header title='About' />
			<Navbar />
			<Title title="About me" />
			<AboutMe />
			<HeadingTitle title="A little bit about me" />
			<ALittleBit />
			<HeadingTitle title="Education" />
			<Education />
			<HeadingTitle title="Experience" />
			<Timeline />
			<HeadingTitle title="Volunteering" />
			<Volunteering />
			<HeadingTitle title="Contest" />
			<Contest />
			<HeadingTitle title="Achievement" />
			<Achievement />
			<HeadingTitle title="Certification" />
			<Certification />
			<Footer />
		</>
	)
}

import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title/Title'
import AboutMe from '@/containers/About/AboutMe'
import HeadingTitle from '@/components/Title/HeadingTitle'
import ALittleBit from '@/containers/About/ALittleBit'
import SoftSkills from '@/containers/About/SoftSkills'
import Education from '@/containers/About/Education'
import TimeLine from '@/containers/About/TimeLine'
import Volunteering from '@/containers/About/Volunteering'
import Contest from '@/containers/About/Contest'
import Achievement from '@/containers/About/Achievement'
import Certification from '@/containers/About/Certification'
import EndContainer from '@/components/EndContainer'
import Footer from '@/layouts/Footer'


export default function About() {
	return (
		<>
			<Navbar />
			<Title title="About me" />
			<AboutMe />
			<HeadingTitle title="A little bit about me" />
			<ALittleBit />
			<HeadingTitle title="Soft skills" />
			<SoftSkills />
			<HeadingTitle title="Education" />
			<Education />
			<HeadingTitle title="Experience" />
			<TimeLine />
			<HeadingTitle title="Volunteering" />
			<Volunteering />
			<HeadingTitle title="Contest" />
			<Contest />
			<HeadingTitle title="Achievement" />
			<Achievement />
			<HeadingTitle title="Certification" />
			<Certification />
			<EndContainer />
			<Footer />
		</>
	)
}

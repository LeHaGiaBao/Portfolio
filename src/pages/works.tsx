import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title/Title'
import About from '@/containers/Work/About'
import HeadingTitle from '@/components/Title/HeadingTitle'
import Doing from '@/containers/Work/Doing'
import Stats from '@/containers/Work/Stats'
import GitHub from '@/containers/Work/GitHub'
import Skills from '@/containers/Work/Skills'
import EndContainer from '@/components/EndContainer'
import Footer from '@/layouts/Footer'

export default function Works() {
    return (
        <>
            <Navbar />
            <Title title="My Works" />
            <About />
            <HeadingTitle title="What I Do" />
            <Doing />
            <HeadingTitle title="My GitHub Stats" />
            <Stats />
            <HeadingTitle title="My GitHub Contribution" />
            <GitHub />
            <HeadingTitle title="My Skills" />
            <Skills />
            <EndContainer />
            <Footer />
        </>
    )
}
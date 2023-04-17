import Header from '@/layouts/Header'
import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title/Title'
import Footer from '@/layouts/Footer'
import About from '@/containers/Work/About'
import HeadingTitle from '@/components/Title/HeadingTitle'
import Doing from '@/containers/Work/Doing'
import Stats from '@/containers/Work/Stats'
import GitHub from '@/containers/Work/GitHub'
import Skills from '@/containers/Work/Skills'

export default function Works() {
    return (
        <>
            <Header title='Works' />
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
            <Footer />
        </>
    )
}
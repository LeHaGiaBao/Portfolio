import Header from '@/layouts/Header'
import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title/Title'
import Footer from '@/layouts/Footer'
import About from '@/containers/Portfolio/About'
import Project from '@/containers/Portfolio/Project'
import EndContainer from '@/components/EndContainer/EndContainer'

export default function Portfolio() {
    return (
        <>
            <Header title='Portfolio' />
            <Navbar />
            <Title title="My Portfolio" />
            <About />
            <Project />
            <EndContainer />
            <Footer />
        </>
    )
}
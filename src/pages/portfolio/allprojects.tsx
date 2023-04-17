import Header from '@/layouts/Header'
import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title/Title'
import FullProjects from '@/components/Portfolio/FullProjects'
import Footer from '@/layouts/Footer'

export default function AllProjects() {
    return (
        <>
            <Header title='All Projects' />
            <Navbar />
            <Title title="All Projects" />
            <FullProjects />
            <Footer />
        </>
    )
}
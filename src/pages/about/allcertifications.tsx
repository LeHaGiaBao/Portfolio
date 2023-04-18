import Header from '@/layouts/Header'
import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title/Title'
import FullCertifications from '@/components/Certification/FullCertifications'
import Footer from '@/layouts/Footer'

export default function AllCertifications() {
    return (
        <>
            <Header title='All Certifications' />
            <Navbar />
            <Title title="All Certifications" />
            <FullCertifications />
            <Footer />
        </>
    )
}
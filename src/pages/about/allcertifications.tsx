import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title/Title'
import FullCertifications from '@/components/Certification/FullCertifications'
import Footer from '@/layouts/Footer/Footer'

export default function AllCertifications() {
    return (
        <>
            <Navbar />
            <Title title="All Certifications" />
            <FullCertifications />
            <Footer />
        </>
    )
}
import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title/Title'
import Footer from '@/layouts/Footer'
import ContactMe from '@/containers/Contact/ContactMe'
import ContactContainer from '@/containers/Contact/ContactContainer'

export default function Contact() {
    return (
        <>
            <Navbar />
            <Title title="Contact Me" />
            <ContactMe />
            <ContactContainer />
            <Footer />
        </>
    )
}
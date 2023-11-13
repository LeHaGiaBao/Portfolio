import Navbar from '@/layouts/Navbar'
import Title from '@/components/Title/Title'
import ContactMe from '@/containers/Contact/ContactMe'
import ContactContainer from '@/containers/Contact/ContactContainer'
import Footer from '@/layouts/Footer/Footer'

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
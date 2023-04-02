import Header from '@/layouts/Header'
import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'
import Error404 from "@/components/Error/Error404"

export default function Custom404() {
    return (
        <>
            <Header title='404 - Page Not Found' />
            <Navbar />
            <Error404 />
            <Footer />
        </>
    )
}
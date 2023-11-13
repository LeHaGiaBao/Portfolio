import Navbar from '@/layouts/Navbar'
import Error404 from "@/components/Error/Error404"
import Footer from '@/layouts/Footer'

export default function Custom404() {
    return (
        <>
            <Navbar />
            <Error404 />
            <Footer />
        </>
    )
}
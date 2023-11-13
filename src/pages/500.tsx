import Navbar from '@/layouts/Navbar'
import Error500 from "@/components/Error/Error500"
import Footer from '@/layouts/Footer'

export default function Custom500() {
    return (
        <>
            <Navbar />
            <Error500 />
            <Footer />
        </>
    )
}
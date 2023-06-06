import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'
import Error500 from "@/components/Error/Error500"

export default function Custom500() {
    return (
        <>
            <Navbar />
            <Error500 />
            <Footer />
        </>
    )
}
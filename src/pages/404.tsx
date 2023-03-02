import Head from "next/head"
import Navbar from '../layouts/Navbar'
import Error404 from "../components/Error/Error404"
import Footer from '../layouts/Footer'

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <Navbar />
            <Error404 />
            <Footer />
        </>
    )
}
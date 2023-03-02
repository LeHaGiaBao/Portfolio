import Head from "next/head"
import Navbar from '../layouts/Navbar'
import Error500 from "../components/Error/Error500"
import Footer from '../layouts/Footer'

export default function Custom500() {
    return (
        <>
            <Head>
                <title>500 - Server-side error occurred</title>
            </Head>
            <Navbar />
            <Error500 />
            <Footer />
        </>
    )
}
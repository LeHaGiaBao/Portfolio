import Link from "next/link"
import Image from "next/image"
import Image404 from '../../assets/image/Image404.png'
import BackToHome from "../button/BackToHome"

export default function Error404() {
    return (
        <>
            <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <Image src={Image404} alt="" className="object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        <p className="text-2xl font-semibold md:text-3xl mt-4 mb-8">Sorry, the page you are looking for could not be found.</p>
                        <Link href="/">
                            <BackToHome />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
import Image from "next/image"
import Image500 from '../../assets/Error/Image500.png'
import BackToHome from "../Button/BackToHome"

export default function Error500() {
    return (
        <>
            <section className="flex items-center h-full sm:p-16 bg-gray-50 text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <Image src={Image500} alt="" className="object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    <p className="text-2xl font-semibold md:text-3xl mt-4 mb-8">Whoops, something went wrong on our servers.</p>
                    <BackToHome />
                </div>
            </section>
        </>
    )
}
import Image from 'next/image'
import Develop from '@/assets/image/Develop.gif'

export default function About() {
    return (
        <>
            <section className="pb-10 sm:pb-16 lg:pb-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div className="relative lg:mb-12">
                            <div className="pl-12 pr-12 lg:pr-6">
                                <Image className="relative rounded-lg shadow-lg" src={Develop} alt="" />
                            </div>
                        </div>
                        <div className="2xl:pl-16">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">We make things easy for projects.</h2>
                            <p className="text-xl leading-relaxed text-gray-900 mt-9">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conse duis enim velit mollit. Exercitation veniam.</p>
                            <p className="mt-6 text-xl leading-relaxed text-gray-900">Velit officia conse duis enim velit mollit. Exercit ation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
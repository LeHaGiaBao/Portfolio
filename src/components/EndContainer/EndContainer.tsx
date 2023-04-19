import { HiOutlineMail } from 'react-icons/hi'
import { email } from '@/data/contact'

export default function EndContainer() {
    return (
        <>
            <section className="py-20 bg-gradient-to-r from-fuchsia-600 to-blue-600 sm:py-32 mx-10 my-10 rounded-xl">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center sm:flex sm:items-center sm:justify-center sm:text-left">
                        <h2 className="text-4xl font-bold text-white">Interested working with me?</h2>

                        <a href={`mailto:${email}`} title="" className="inline-flex items-center justify-center flex-shrink-0 px-4 py-4 mt-8 text-base font-semibold text-gray-900 transition-all duration-200 bg-yellow-300 rounded-md sm:mt-0 sm:ml-8 lg:ml-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                            <HiOutlineMail className="object-cover w-6 h-6 rounded-full mr-3" />
                            Email me
                        </a>

                        <a href="portfolio" title="" className="inline-flex items-center justify-center flex-shrink-0 px-4 py-4 mt-8 text-base font-semibold text-gray-900 transition-all duration-200 bg-yellow-300 rounded-md sm:mt-0 sm:ml-8 lg:ml-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                            See more projects
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
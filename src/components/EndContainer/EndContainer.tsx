import React from 'react'
import styles from './EndContainer.module.scss'
import { Sms } from 'iconsax-react'
import { HiOutlineMail } from 'react-icons/hi'
import { email } from '@/data/contact'

function EndContainer() {
    return (
        <>
            <section className="py-20 sm:py-32 mx-5 md:mx-20 my-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                <div className="px-10 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center sm:flex sm:items-center sm:justify-center sm:text-left">
                        <h2 className="text-4xl font-bold text-white">Interested working with me?</h2>

                        <a href={`mailto:${email}`} title="" className="inline-flex items-center justify-center flex-shrink-0 px-4 py-4 mt-8 text-base font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-md sm:mt-0 sm:ml-8 lg:ml-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                            <Sms className="object-cover w-6 h-6 rounded-full mr-3" />
                            Email me
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EndContainer
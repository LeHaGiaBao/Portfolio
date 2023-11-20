import React from 'react'
import styles from './ContactContainer.module.scss'
import {
    Sms,
    Call,
    Location,
} from 'iconsax-react';
import { HiOutlineMail } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'
import { MdOutlinePlace } from 'react-icons/md'
import { email, phone, address } from '@/data/contact'
import ContactBlock from '@/components/Contact/ContactBlock'

function ContactContainer() {
    const contact = [
        {
            id: 1,
            icon: <Sms className="flex-shrink-0 w-14 h-14 mx-auto text-gray-400" />,
            info: email,
            href: `mailto:${email}`
        },
        {
            id: 2,
            icon: <Call className="flex-shrink-0 w-14 h-14 mx-auto text-gray-400" />,
            info: phone,
            href: `tel:${phone}`
        },
        {
            id: 3,
            icon: <Location className="flex-shrink-0 w-14 h-14 mx-auto text-gray-400" />,
            info: address,
            href: 'https://www.google.com/maps/place/H%E1%BB%93+Ch%C3%AD+Minh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.754792,106.6952276,10z/data=!3m1!4b1!4m6!3m5!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638!16zL20vMGhuNGg',
        },
    ]

    return (
        <>
            <section className="mb-20">
                <div className="px-5 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 lg:grid-cols-3">
                            {
                                contact.map(({ id, icon, info, href }) => {
                                    return (
                                        <ContactBlock key={id} icon={icon} info={info} href={href} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactContainer
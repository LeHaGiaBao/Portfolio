import React from 'react'
import styles from './Social.module.scss'
import {
    FaFacebook,
    FaLinkedin,
    FaGithub,
    FaGitlab,
    FaInstagram,
    FaBehanceSquare,
    FaDribbble,
    FaPinterest,
    FaDeviantart
} from 'react-icons/fa'
import { SiBuymeacoffee } from 'react-icons/si'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { SOCIAL } from '@/data/contact'

function Social() {
    const social = [
        {
            id: 1,
            link: SOCIAL.FACEBOOK,
            icon: <FaFacebook className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 2,
            link: SOCIAL.LINKEDIN,
            icon: <FaLinkedin className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 3,
            link: SOCIAL.INSTAGRAM,
            icon: <FaInstagram className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 4,
            link: SOCIAL.GITHUB,
            icon: <FaGithub className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 5,
            link: SOCIAL.GITLAB,
            icon: <FaGitlab className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 6,
            link: SOCIAL.BEHANCE,
            icon: <FaBehanceSquare className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 7,
            link: SOCIAL.DRIBBBLE,
            icon: <FaDribbble className='w-7 h-7 md:w-9 md:h-9' />,
        },
        // {
        //     id: 8,
        //     link: SOCIAL.BUYMEACOFFEE,
        //     icon: <SiBuymeacoffee className='w-7 h-7 md:w-9 md:h-9' />,
        // },
        // {
        //     id: 9,
        //     link: SOCIAL.TWITTER,
        //     icon: <FaSquareXTwitter className='w-7 h-7 md:w-9 md:h-9' />
        // },
        // {
        //     id: 10,
        //     link: SOCIAL.PINTEREST,
        //     icon: <FaPinterest className='w-7 h-7 md:w-9 md:h-9' />
        // },
        // {
        //     id: 11,
        //     link: SOCIAL.DEVIANTART,
        //     icon: <FaDeviantart className='w-7 h-7 md:w-9 md:h-9' />
        // }
    ]

    return (
        <>
            <div className="flex mt-4 space-x-6 justify-center">
                {
                    social.map(({ id, link, icon }) => {
                        return (
                            <SocialItem key={id} link={link} icon={icon} />
                        )
                    })
                }
            </div>
        </>
    )
}

const SocialItem = ({ link, icon }: any) => {
    return (
        <>
            <a href={link} target=" _blank " className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                {icon}
            </a>
        </>
    )
}

export default Social
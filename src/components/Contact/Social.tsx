import {
    FaFacebook,
    FaLinkedin,
    FaGithub,
    FaGitlab,
    FaInstagram,
    FaBehanceSquare,
    FaDribbble
} from 'react-icons/fa'
import { SiBuymeacoffee } from 'react-icons/si'

export default function Social() {
    const social = [
        {
            id: 1,
            link: "https://www.facebook.com/lehagiabao0205",
            icon: <FaFacebook className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 2,
            link: 'https://www.linkedin.com/in/lehagiabao/',
            icon: <FaLinkedin className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 3,
            link: 'https://www.instagram.com/le.ha.gia.bao/',
            icon: <FaInstagram className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 4,
            link: 'https://github.com/LeHaGiaBao',
            icon: <FaGithub className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 5,
            link: 'https://gitlab.com/LeHaGiaBao',
            icon: <FaGitlab className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 6,
            link: 'https://www.behance.net/lehagiabao',
            icon: <FaBehanceSquare className='w-7 h-7 md:w-9 md:h-9' />,
        },
        {
            id: 7,
            link: 'https://dribbble.com/lehagiabao',
            icon: <FaDribbble className='w-7 h-7 md:w-9 md:h-9' />,
        },
        // {
        //     id: 8,
        //     link: 'https://www.buymeacoffee.com/lehagiabao',
        //     icon: <SiBuymeacoffee className='w-7 h-7 md:w-9 md:h-9' />,
        // },
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
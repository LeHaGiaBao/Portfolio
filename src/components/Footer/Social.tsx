import {
    FaFacebook,
    FaLinkedin,
    FaGithub,
    FaGitlab,
    FaInstagram,
    FaBehanceSquare,
    FaDribbble
} from 'react-icons/fa'

export default function Social() {
    const social = [
        {
            id: 1,
            link: "https://www.facebook.com/lehagiabao0205",
            icon: <FaFacebook />,
        },
        {
            id: 2,
            link: 'https://www.linkedin.com/in/lehagiabao/',
            icon: <FaLinkedin />,
        },
        {
            id: 3,
            link: 'https://www.instagram.com/le.ha.gia.bao/',
            icon: <FaInstagram />,
        },
        {
            id: 4,
            link: 'https://github.com/LeHaGiaBao',
            icon: <FaGithub />,
        },
        {
            id: 5,
            link: 'https://gitlab.com/LeHaGiaBao',
            icon: <FaGitlab />,
        },
        {
            id: 6,
            link: 'https://www.behance.net/lehagiabao',
            icon: <FaBehanceSquare />,
        },
        {
            id: 7,
            link: 'https://dribbble.com/lehagiabao',
            icon: <FaDribbble />,
        },
    ]

    return (
        <>
            <div className="w-full">
                <div className="max-w-screen-2xl px-5 mx-auto">
                    <div className="flex max-w-lg mx-auto items-center justify-between">
                        {
                            social.map(({ id, link, icon }) => {
                                return (
                                    <SocialItem key={id} link={link} icon={icon} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

const SocialItem = ({ link, icon }: any) => {
    return (
        <>
            <a href={link} target=" _blank " className="flex items-center justify-center w-10 h-10 rounded-full hover:rounded-xl sm:w-10 sm:h-10 text-white bg-gray-500">
                {icon}
            </a>
        </>
    )
}
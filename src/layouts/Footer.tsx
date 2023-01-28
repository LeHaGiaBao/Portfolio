import { FaFacebook, FaLinkedin, FaGithub, FaGitlab, FaInstagram, FaTwitter, FaBehanceSquare, FaDribbble } from 'react-icons/fa'

function Footer() {
    let year: number = new Date().getFullYear()

    const social = [
        {
            id: 1,
            color: "#1877f2",
            link: "https://www.facebook.com/lehagiabao0205",
            icon: <FaFacebook />,
            span: "Facebook page",
        },
        {
            id: 2,
            color: "#0a66c2",
            link: 'https://www.linkedin.com/in/lehagiabao/',
            icon: <FaLinkedin />,
            span: "LinkedIn page",
        },
        {
            id: 3,
            color: "#171515",
            link: 'https://github.com/LeHaGiaBao',
            icon: <FaGithub />,
            span: "GitHub page",
        },
        {
            id: 4,
            color: "#e24329",
            link: 'https://gitlab.com/LeHaGiaBao',
            icon: <FaGitlab />,
            span: "GitLab page",
        },
        {
            id: 5,
            color: "#c32aa3",
            link: 'https://www.instagram.com/le.ha.gia.bao/',
            icon: <FaInstagram />,
            span: "Instagram page",
        },
        {
            id: 6,
            color: "#1da1f2",
            link: 'https://twitter.com/LeHaGiaBao',
            icon: <FaTwitter />,
            span: "Twitter page",
        },
        {
            id: 7,
            color: "#053eff",
            link: 'https://www.behance.net/lehagiabao',
            icon: <FaBehanceSquare />,
            span: "Behance page",
        },
        {
            id: 8,
            color: "#ea4c89",
            link: 'https://dribbble.com/lehagiabao',
            icon: <FaDribbble />,
            span: "Dribbble page",
        },
    ]

    return (
        <>
            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-xl">
                        {
                            social.map(({ id, color, link, icon, span }) => {
                                return (
                                    <SocialItem key={id} color={color} link={link} icon={icon} span={span} />
                                )
                            })
                        }
                    </div>
                </div>
            </footer>
        </>
    );
}

const SocialItem = ({ color, link, icon, span }: any) => {
    return (
        <a href={link} target=" _blank " className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            {icon}
            <span className="sr-only">{span}</span>
        </a>
    )
}

export default Footer
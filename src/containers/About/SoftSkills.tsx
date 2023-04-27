import { GiSandsOfTime } from 'react-icons/gi'
import { RiTeamFill } from 'react-icons/ri'
import { RiLightbulbFlashFill } from 'react-icons/ri'
import { FaComments } from 'react-icons/fa'
import { RiUserSearchFill } from 'react-icons/ri'
import { FaAssistiveListeningSystems } from 'react-icons/fa'

const Rotate = require('react-reveal/Rotate')

export default function SoftSkills() {
    const softskills = [
        {
            id: 1,
            icon: (
                <div className="relative flex items-center justify-center mx-auto">
                    <svg className="text-blue-100" width="72" height="75" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                    </svg>
                    <GiSandsOfTime className="absolute text-blue-600 w-9 h-9" />
                </div>
            ),
            title: 'Time management'
        },
        {
            id: 2,
            icon: (
                <div className="relative flex items-center justify-center mx-auto">
                    <svg className="text-green-100" width="66" height="68" viewBox="0 0 66 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                    </svg>
                    <RiTeamFill className="absolute text-green-600 w-9 h-9" />
                </div>
            ),
            title: 'Teamwork'
        },
        {
            id: 3,
            icon: (
                <div className="relative flex items-center justify-center mx-auto">
                    <svg className="text-orange-100" width="62" height="64" viewBox="0 0 62 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                    </svg>
                    <RiLightbulbFlashFill className="absolute text-orange-600 w-9 h-9" />
                </div>
            ),
            title: 'Problem-solving'
        },
        {
            id: 4,
            icon: (
                <div className="relative flex items-center justify-center mx-auto">
                    <svg className="text-gray-100" width="62" height="64" viewBox="0 0 62 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"></path>
                    </svg>
                    <RiUserSearchFill className="absolute text-gray-600 w-9 h-9" />
                </div>
            ),
            title: 'Self study'
        },
        {
            id: 5,
            icon: (
                <div className="relative flex items-center justify-center mx-auto">
                    <svg className="text-purple-100" width="66" height="68" viewBox="0 0 66 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                    </svg>
                    <FaComments className="absolute text-purple-600 w-9 h-9" />
                </div>
            ),
            title: 'Communication'
        },
        {
            id: 6,
            icon: (
                <div className="relative flex items-center justify-center mx-auto">
                    <svg className="text-rose-100" width="72" height="75" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                    </svg>
                    <FaAssistiveListeningSystems className="absolute text-rose-600 w-9 h-9" />
                </div>
            ),
            title: 'Listening'
        },
    ]

    return (
        <>
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
                        {
                            softskills.map(({ id, icon, title }) => {
                                return (
                                    <SoftSkillsItem key={id} icon={icon} title={title} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

const SoftSkillsItem = ({ icon, title }: any) => {
    return (
        <>
            <Rotate>
                <div>
                    {icon}
                    <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-300">{title}</h3>
                </div>
            </Rotate>
        </>
    )
}
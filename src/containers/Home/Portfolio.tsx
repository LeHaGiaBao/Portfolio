import Link from "next/link"
import PortfolioBlock from "@/components/Portfolio/PortfolioBlock"
import { project } from '@/data/project'
import { MdLaunch } from 'react-icons/md'
import { PATH_NAME } from "@/routes/pathName"

const Fade = require('react-reveal/Fade')

export default function Portfolio() {
    return (
        <>
            <div>
                <Fade bottom>
                    <section className="pb-20">
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:max-w-full">
                                {
                                    project.map(({ id, githublink, demo, image, time, name, des, tech, view }) => {
                                        return (
                                            <PortfolioBlock key={id} githublink={githublink} demo={demo} image={image} time={time} name={name} des={des} tech={tech} view={view} />
                                        )
                                    }).slice(-3).reverse()
                                }
                            </div>
                        </div>
                    </section>
                </Fade >
                <div className="text-center mb-20">
                    <Link href={PATH_NAME.PORTFOLIO}>
                        <button type="button" className="inline-flex items-center justify-center px-5 py-4 text-base font-semibold transition-all duration-200 rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300">
                            More projects
                            <MdLaunch className="w-5 h-5 ml-3 -mr-1" />
                        </button>
                    </Link>
                </div>
            </div >
        </>
    )
}
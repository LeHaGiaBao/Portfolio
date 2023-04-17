import { AiOutlineArrowRight } from 'react-icons/ai'
import { project } from '@/data/project'
import PortfolioBlock from '@/components/Portfolio/PortfolioBlock'

export default function Project() {
    return (
        <>
            <section className="pt-10 pb-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                <span className="border-b-4 border-[#4ADE80]">Projects</span>
                            </h2>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-3">
                            <a href="portfolio/allprojects" className="inline-flex items-center justify-center px-5 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-gradient-to-r from-fuchsia-600 to-blue-600" role="button">
                                More projects
                                <AiOutlineArrowRight className="w-5 h-5 ml-5 -mr-1" />
                            </a>
                        </div>
                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        {
                            project.map(({ id, githublink, demo, image, time, name, des, view }) => {
                                return (
                                    <PortfolioBlock key={id} githublink={githublink} demo={demo} image={image} time={time} name={name} des={des} view={view} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
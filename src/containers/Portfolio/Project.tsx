import { project, learning } from '@/data/project'
import PortfolioBlock from '@/components/Portfolio/PortfolioBlock'

export default function Project() {
    return (
        <>
            <section className="pt-10 pb-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                <span className="border-b-4 border-[#4ADE80]">My Projects</span>
                            </h2>
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

            <section className="pt-10 pb-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                <span className="border-b-4 border-[#4ADE80]">My Learning</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        {
                            learning.map(({ id, githublink, demo, image, time, name, des, view }) => {
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
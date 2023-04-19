import { project, learning } from '@/data/project'
import PortfolioBlock from '@/components/Portfolio/PortfolioBlock'
import HeadingTitle from '@/components/Title/HeadingTitle'

export default function Project() {
    return (
        <>
            <section className="pt-10 pb-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <HeadingTitle title="My Projects" />

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        {
                            project.map(({ id, githublink, demo, image, time, name, des, tech, view }) => {
                                return (
                                    <PortfolioBlock key={id} githublink={githublink} demo={demo} image={image} time={time} name={name} des={des} tech={tech} view={view} />
                                )
                            }).reverse()
                        }
                    </div>
                </div>
            </section>

            <section className="pt-10 pb-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <HeadingTitle title="My Learning" />

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        {
                            learning.map(({ id, githublink, demo, image, time, name, des, tech, view }) => {
                                return (
                                    <PortfolioBlock key={id} githublink={githublink} demo={demo} image={image} time={time} name={name} des={des} tech={tech} view={view} />
                                )
                            }).reverse()
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
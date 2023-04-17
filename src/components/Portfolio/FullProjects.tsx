import { project } from '@/data/project'
import PortfolioBlock from '@/components/Portfolio/PortfolioBlock'

export default function FullProjects() {
    return (
        <>
            <section className="pb-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:max-w-full">
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
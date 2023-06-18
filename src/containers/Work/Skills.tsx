import Title from "@/components/Skills/Title"
import SkillBlock from "@/components/Skills/SkillBlock"
import { languages, frontend, backend, mobile, database, versioncontroll, packagemanager, deploy, tools, design, skills } from "@/data/skills"

export default function Skills() {
    return (
        <>
            <section className="py-10">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <Title title="Languages" />
                    <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
                        {
                            languages.map(({ id, image, name }) => {
                                return (
                                    <SkillBlock key={id} image={image} name={name} />
                                )
                            })
                        }
                    </div>

                    <Title title="Frontend" />
                    <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
                        {
                            frontend.map(({ id, image, name }) => {
                                return (
                                    <SkillBlock key={id} image={image} name={name} />
                                )
                            })
                        }
                    </div>

                    <Title title="Backend" />
                    <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
                        {
                            backend.map(({ id, image, name }) => {
                                return (
                                    <SkillBlock key={id} image={image} name={name} />
                                )
                            })
                        }
                    </div>

                    <Title title="Mobile" />
                    <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
                        {
                            mobile.map(({ id, image, name }) => {
                                return (
                                    <SkillBlock key={id} image={image} name={name} />
                                )
                            })
                        }
                    </div>

                    <Title title="Database" />
                    <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
                        {
                            database.map(({ id, image, name }) => {
                                return (
                                    <SkillBlock key={id} image={image} name={name} />
                                )
                            })
                        }
                    </div>

                    <Title title="Version Control" />
                    <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
                        {
                            versioncontroll.map(({ id, image, name }) => {
                                return (
                                    <SkillBlock key={id} image={image} name={name} />
                                )
                            })
                        }
                    </div>

                    <Title title="Package Manager" />
                    <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
                        {
                            packagemanager.map(({ id, image, name }) => {
                                return (
                                    <SkillBlock key={id} image={image} name={name} />
                                )
                            })
                        }
                    </div>

                    <Title title="Deploy" />
                    <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
                        {
                            deploy.map(({ id, image, name }) => {
                                return (
                                    <SkillBlock key={id} image={image} name={name} />
                                )
                            })
                        }
                    </div>

                    <Title title="IDEs/Editors & Tools" />
                    <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
                        {
                            tools.map(({ id, image, name }) => {
                                return (
                                    <SkillBlock key={id} image={image} name={name} />
                                )
                            })
                        }
                    </div>

                    <Title title="Design" />
                    <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
                        {
                            design.map(({ id, image, name }) => {
                                return (
                                    <SkillBlock key={id} image={image} name={name} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            {/* <section className="py-10">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    {
                        skills.map(({ id, title, children1 }) => {
                            return (
                                <RenderSkillBlock key={id} title={title} />
                            )
                        })
                    }
                </div>
            </section> */}
        </>
    )
}

interface Props {
    id: number,
    title: string,
    children1: []
}

type PropsChildren1 = {
    children1: []
}

const RenderSkillBlock: React.FC<Props> = ({ id, title, children1 }) => {
    return (
        <>
            <Title title={title} />
        </>
    )
}

const RenderSubTitle = (props: any) => {
    const { sub } = props

    return (
        <>
            <div className="flex items-end justify-between mt-20">
                <div className="flex-1 text-center lg:text-left">
                    <p className="text-xl font-bold leading-tight text-gray-900 dark:text-gray-300 my-5">
                        {sub}
                    </p>
                </div>
            </div>
        </>
    )
}
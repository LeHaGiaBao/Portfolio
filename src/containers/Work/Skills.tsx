import Title from "@/components/Skills/Title"
import SkillBlock from "@/components/Skills/SkillBlock"
import { frontend, backend, database, versioncontroll, deploy, tools, design } from "@/data/skills"

export default function Skills() {
    return (
        <>
            <section className="py-10">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    {/* <Title title="Languages" />
                    <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
                        {
                            languages.map(({ id, image, name }) => {
                                return (
                                    <SkillBlock key={id} image={image} name={name} />
                                )
                            })
                        }
                    </div> */}

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

                    <Title title="Tools" />
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
        </>
    )
}
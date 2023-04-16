import Title from "@/components/Skills/Title"
import SkillBlock from "@/components/Skills/SkillBlock"
// import { languages, frontend, backend, database, versioncontroll, deploy, tools, design } from "@/data/skills"

// Languages
import JS from '@/assets/Tech/Languages/JS.png'
import TS from '@/assets/Tech/Languages/TS.png'
import PHP from '@/assets/Tech/Languages/PHP.png'
import Python from '@/assets/Tech/Languages/Python.png'
import C from '@/assets/Tech/Languages/C.png'
import CPP from '@/assets/Tech/Languages/CPP.png'

// Frontend
import html from '@/assets/Tech/Fontend/html.png'
import css from '@/assets/Tech/Fontend/css.png'
import sass from '@/assets/Tech/Fontend/sass.png'
import jquery from '@/assets/Tech/Fontend/jquery.png'
import react from '@/assets/Tech/Fontend/react.png'
import next from '@/assets/Tech/Fontend/next.png'
import redux from '@/assets/Tech/Fontend/redux.png'
import reactrouter from '@/assets/Tech/Fontend/ReactRouter.png'
import tailwind from '@/assets/Tech/Fontend/tailwind.png'
import bootstrap from '@/assets/Tech/Fontend/bootstrap.png'
import antd from '@/assets/Tech/Fontend/antd.png'
import mui from '@/assets/Tech/Fontend/mui.png'

// Backend
import node from '@/assets/Tech/Backend/node.png'
import express from '@/assets/Tech/Backend/express.png'
import laravel from '@/assets/Tech/Backend/laravel.png'

// Database
import sqlserver from '@/assets/Tech/Database/sqlserver.png'
import mysql from '@/assets/Tech/Database/mysql.png'
import mongodb from '@/assets/Tech/Database/mongo.jpeg'
import firebase from '@/assets/Tech/Database/firebase.png'

// Version control
import git from '@/assets/Tech/Versioncontroll/git.png'
import github from '@/assets/Tech/Versioncontroll/github.png'
import gitlab from '@/assets/Tech/Versioncontroll/gitlab.png'
import bitbucket from '@/assets/Tech/Versioncontroll/Bitbucket.png'

// Deploy
import githubpage from '@/assets/Tech/Deploy/GitHub.png'
import vercel from '@/assets/Tech/Deploy/vercel.png'
import netlify from '@/assets/Tech/Deploy/netlify.jpeg'
import heroku from '@/assets/Tech/Deploy/Heruku.png'

// Tools
import vscode from '@/assets/Tech/IDE/vscode.png'
import visualstudio from '@/assets/Tech/IDE/visual studio.png'
import postman from '@/assets/Tech/Tool/postman.png'
import swagger from '@/assets/Tech/Tool/swagger.png'
import gitkraken from '@/assets/Tech/Tool/gitkraken.png'
import npm from '@/assets/Tech/Package/npm.png'
import yarn from '@/assets/Tech/Package/yarn.png'

// Design
import photoshop from '@/assets/Tech/Design/photoshop.png'
import figma from '@/assets/Tech/Design/figma.png'
import wordpress from '@/assets/Tech/Nocode/wordpress.png'
import wix from '@/assets/Tech/Nocode/wix.png'

const languages = [
    {
        id: 1,
        image: JS,
        name: 'JavaScript',
    },
    {
        id: 2,
        image: TS,
        name: 'TypeScript',
    },
    {
        id: 3,
        image: PHP,
        name: 'PHP',
    },
    {
        id: 4,
        image: Python,
        name: 'Python',
    },
    {
        id: 5,
        image: C,
        name: 'C',
    },
    {
        id: 6,
        image: CPP,
        name: 'C++',
    },
]

const frontend = [
    {
        id: 1,
        image: html,
        name: 'HTML',
    },
    {
        id: 2,
        image: css,
        name: 'CSS',
    },
    {
        id: 3,
        image: sass,
        name: 'Sass',
    },
    {
        id: 4,
        image: jquery,
        name: 'jQuery',
    },
    {
        id: 5,
        image: react,
        name: 'ReactJS',
    },
    {
        id: 6,
        image: next,
        name: 'NextJS',
    },
    {
        id: 7,
        image: redux,
        name: 'Redux',
    },
    {
        id: 8,
        image: reactrouter,
        name: 'React Router',
    },
    {
        id: 9,
        image: tailwind,
        name: 'TailwindCSS',
    },
    {
        id: 10,
        image: bootstrap,
        name: 'Bootstrap',
    },
    {
        id: 11,
        image: antd,
        name: 'Ant Design',
    },
    {
        id: 12,
        image: mui,
        name: 'Material UI',
    },
]

const backend = [
    {
        id: 1,
        image: node,
        name: 'NodeJS',
    },
    {
        id: 2,
        image: express,
        name: 'ExpressJS',
    },
    {
        id: 3,
        image: laravel,
        name: 'Laravel',
    },
]

const database = [
    {
        id: 1,
        image: sqlserver,
        name: 'Microsoft SQL Server',
    },
    {
        id: 2,
        image: mysql,
        name: 'MySQL',
    },
    {
        id: 3,
        image: mongodb,
        name: 'MongoDB',
    },
    {
        id: 4,
        image: firebase,
        name: 'Firebase',
    },
]

const versioncontroll = [
    {
        id: 1,
        image: git,
        name: 'Git',
    },
    {
        id: 2,
        image: github,
        name: 'GitHub',
    },
    {
        id: 3,
        image: gitlab,
        name: 'GitLab',
    },
    {
        id: 4,
        image: bitbucket,
        name: 'Bitbucket',
    },
]

const deploy = [
    {
        id: 1,
        image: githubpage,
        name: 'GitHub Pages',
    },
    {
        id: 2,
        image: vercel,
        name: 'Vercel',
    },
    {
        id: 3,
        image: netlify,
        name: 'Netlify',
    },
    {
        id: 4,
        image: heroku,
        name: 'Heroku',
    },
]

const tools = [
    {
        id: 1,
        image: vscode,
        name: 'Visual Studio Code',
    },
    {
        id: 2,
        image: visualstudio,
        name: 'Visual Studio',
    },
    {
        id: 3,
        image: npm,
        name: 'NPM',
    },
    {
        id: 4,
        image: yarn,
        name: 'Yarn',
    },
    {
        id: 5,
        image: postman,
        name: 'Postman',
    },
    {
        id: 6,
        image: swagger,
        name: 'Swagger',
    },
    {
        id: 7,
        image: gitkraken,
        name: 'Gitkraken',
    },
]

const design = [
    {
        id: 1,
        image: photoshop,
        name: 'Adobe Photoshop',
    },
    {
        id: 2,
        image: figma,
        name: 'Figma',
    },
    {
        id: 3,
        image: wordpress,
        name: 'Wordpress',
    },
    {
        id: 4,
        image: wix,
        name: 'Wix',
    },
]

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
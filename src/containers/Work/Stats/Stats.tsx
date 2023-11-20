import React from "react";
import styles from './Stats.module.scss'
import useGithubStats from "react-github-user-stats";
import GitHubStats from "@/components/Stats/GitHubStats";
import {
    ProgrammingArrows,
    UserTick,
    Star1,
    Hierarchy2,
} from 'iconsax-react'
import { BiGitCompare } from 'react-icons/bi'
import { RiUserFollowLine } from 'react-icons/ri'
import { RiStarSFill } from 'react-icons/ri'
import { BiGitRepoForked } from 'react-icons/bi'

function Stats() {
    const { error, loading, userData } = useGithubStats("LeHaGiaBao");

    if (loading) return <h1>Loading data..</h1>;
    if (error) return <h1>ERROR: {error}</h1>;
    if (!userData) return <h1>Not found!</h1>;

    const data = [
        {
            id: 1,
            icon: <ProgrammingArrows className="flex-shrink-0 w-12 h-12 text-pink-500" />,
            stats: userData.public_repos,
            name: 'Public Repository',
        },
        {
            id: 2,
            icon: <UserTick className="flex-shrink-0 w-12 h-12 text-yellow-500" />,
            stats: userData.followers,
            name: 'Followers',
        },
        {
            id: 3,
            icon: <Star1 className="flex-shrink-0 w-12 h-12 text-cyan-500" />,
            stats: userData.total_stars,
            name: 'Total stars',
        },
        {
            id: 4,
            icon: <Hierarchy2 className="flex-shrink-0 w-12 h-12 text-blue-500" />,
            stats: userData.total_forks,
            name: 'Total forks',
        },
    ]

    return (
        <>
            <section className="pt-10 pb-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 px-6 sm:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12 ">
                        {
                            data.map(({ id, icon, stats, name }) => {
                                return (
                                    <GitHubStats key={id} icon={icon} stats={stats} name={name} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stats
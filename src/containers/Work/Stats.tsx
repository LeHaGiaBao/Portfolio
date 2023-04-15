import useGithubStats from "react-github-user-stats";
import GitHubStats from "@/components/Stats/GitHubStats";

import { BiGitCompare } from 'react-icons/bi'
import { RiUserFollowLine } from 'react-icons/ri'
import { RiStarSFill } from 'react-icons/ri'
import { BiGitRepoForked } from 'react-icons/bi'

export default function Stats() {
    const { error, loading, userData } = useGithubStats("LeHaGiaBao");

    if (loading) return <h1>Loading data..</h1>;
    if (error) return <h1>ERROR: {error}</h1>;
    if (!userData) return <h1>Not found!</h1>;

    const data = [
        {
            id: 1,
            icon: <BiGitCompare className="flex-shrink-0 w-16 h-16 text-gray-300" />,
            stats: userData.public_repos,
            name: 'Public Repository',
        },
        {
            id: 2,
            icon: <RiUserFollowLine className="flex-shrink-0 w-16 h-16 text-gray-300" />,
            stats: userData.followers,
            name: 'Followers',
        },
        {
            id: 3,
            icon: <RiStarSFill className="flex-shrink-0 w-16 h-16 text-gray-300" />,
            stats: userData.total_stars,
            name: 'Total stars',
        },
        {
            id: 4,
            icon: <BiGitRepoForked className="flex-shrink-0 w-16 h-16 text-gray-300" />,
            stats: userData.total_forks,
            name: 'Total forks',
        },
    ]

    return (
        <>
            <section className="py-10">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
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
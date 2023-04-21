import StatsBlock from "@/components/Stats/StatsBlock"
import { stats } from '@/data/stats'

export default function Stats() {
    return (
        <>
            <div className="container mx-auto px-6">
                <section className="stats">
                    <div className="container text-black dark:text-white">
                        <div className="all-items">
                            {
                                stats.map(({ id, number, title, content }) => {
                                    return (
                                        <StatsBlock key={id} number={number} title={title} content={content} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
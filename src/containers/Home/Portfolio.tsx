import PortfolioBlock from "@/components/Portfolio/PortfolioBlock"
import { portfolio } from "@/data/portfolio"

export default function Portfolio() {
    return (
        <>
            <section className="px-6 py-24 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        portfolio.map(({ id, image, title, content }) => {
                            return (
                                <PortfolioBlock key={id} image={image} title={title} content={content} />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
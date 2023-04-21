import WorksBlock from "@/components/Works/WorksBlock";
import { services } from '@/data/services'

export default function Works() {
    return (
        <>
            <div className="container mx-auto px-6">
                <section className="services">
                    <div className="container text-black dark:text-white">
                        <div className="all-items">
                            {
                                services.map(({ id, image, title, content }) => {
                                    return (
                                        <WorksBlock key={id} image={image} title={title} content={content} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
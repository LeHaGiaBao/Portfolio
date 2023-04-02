import ServicesBlock from "@/components/Services/ServicesBlock";
import { services } from '@/data/services'

export default function Services() {
    return (
        <>
            <div className="container mx-auto px-6">
                <section className="services">
                    <div className="container text-black">
                        <div className="all-items">
                            {
                                services.map(({ id, image, title, content }) => {
                                    return (
                                        <ServicesBlock key={id} image={image} title={title} content={content} />
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
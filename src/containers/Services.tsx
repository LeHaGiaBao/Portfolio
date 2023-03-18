import ServicesBlock from "@/components/Services/ServicesBlock";
import { services } from '@/data/services'

export default function Services() {
    return (
        <>
            <div className="py-16 bg-primary">
                <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                    <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">

                        {
                            services.map(({ id, image, title, content }) => {
                                return (
                                    <ServicesBlock key={id} image={image} title={title} content={content} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
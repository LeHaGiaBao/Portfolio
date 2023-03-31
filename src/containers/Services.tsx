import Link from "next/link";
import ServicesBlock from "@/components/Services/ServicesBlock";
import { services } from '@/data/services'

export default function Services() {
    return (
        <>
            <div className="py-20 bg-primary text-center">
                <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                    <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
                        {
                            services.map(({ id, image, title, content }) => {
                                return (
                                    <ServicesBlock key={id} image={image} title={title} content={content} />
                                )
                            })
                        }
                    </div>
                </div>
                <Link href="/services">
                    <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-8 py-3 text-center mr-2 mb-2 mt-20">
                        Read more
                    </button>
                </Link>
            </div>
        </>
    );
}
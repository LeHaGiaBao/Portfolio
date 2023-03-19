import Link from "next/link";
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
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <Link href="/services">
                        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-8 py-3 text-center mr-2 mb-2">
                            Read more
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
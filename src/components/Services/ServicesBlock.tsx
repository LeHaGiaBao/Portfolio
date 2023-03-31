import Image from "next/image"

export default function ServicesBlock({ image, title, content }: any) {
    return (
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-xl shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-28 h-28 mx-auto text-white rounded-md mt-10">
                    <Image src={image} alt="illustration" className="mx-auto" />
                </div>
            </div>
            <h3 className="mt-5 py-5 text-4xl capitalize font-semibold text-gray-700 sm:text-3xl">
                {title}
            </h3>
            <p className="py-10 text-gray-500 text-xl">
                {content}
            </p>
        </div>
    )
}
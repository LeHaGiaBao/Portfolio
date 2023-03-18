import Image from "next/image"

export default function ServicesBlock({ image, title, content }: any) {
    return (
        <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 grid grid-rows-2">
            <Image src={image} alt="illustration" className=" ml-auto -mb-12" />
            <div className="my-12 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-900">{title}</h3>
                <p className="mb-6">{content}</p>
                <a href="#" className="block font-medium text-purple-600">Know more</a>
            </div>
        </div>
    )
}
import Image from "next/image"

export default function ServicesBlock({ image, title, content }: any) {
    return (
        <div className="bg-white rounded-2xl shadow-xl px-8 py-10 sm:px-12 lg:px-8 grid grid-rows-2">
            <Image src={image} alt="illustration" className="mx-auto" />
            <div className="mt-10">
                <h3 className="text-center text-3xl uppercase font-semibold text-blue-500">{title}</h3>
                <p className="my-6 text-base text-center">{content}</p>
            </div>
        </div>
    )
}
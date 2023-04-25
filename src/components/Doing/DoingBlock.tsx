import Image from "next/image"

export default function DoingBlock({ image, title, content }: any) {
    return (
        <>
            <div className="overflow-hidden bg-white rounded-md shadow">
                <div className="px-8 py-12">
                    <div className="relative w-24 h-24 mx-auto">
                        <Image src={image} alt="" className="relative object-cover w-24 h-24 mx-auto" />
                    </div>
                    <p className="text-3xl font-semibold mt-9 capitalize text-black">{title}</p>
                    <blockquote className="mt-7 text-left">
                        <p className="text-base text-black">{content}</p>
                    </blockquote>
                </div>
            </div>
        </>
    )
}
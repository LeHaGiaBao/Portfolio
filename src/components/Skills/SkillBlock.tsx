import Image from "next/image"

export default function SkillBlock({ name }: any) {
    return (
        <>
            <div className="overflow-hidden bg-white rounded-md">
                <div className="p-8">
                    <div className="flex items-center">
                        {/* <Image src={image} alt="" className="flex-shrink-0 w-12 h-auto" /> */}
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-black">{name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
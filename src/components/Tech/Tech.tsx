import Image from "next/image"
import ts from '@/assets/Tech/Language/ts.png'

export default function Tech() {
    return (
        <>
            <div className="w-28 h-28 p-7 rounded-md shadow-md bg-gray-50 text-gray-900">
                <Image src={ts} alt="icon" className="object-center w-full" />
            </div>
        </>
    )
}
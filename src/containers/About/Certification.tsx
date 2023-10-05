import Link from "next/link"
import { certification } from "@/data/certification"
import CertificationBlock from "@/components/Certification/CertificationBlock"
import { MdLaunch } from 'react-icons/md'
import { PATH_NAME } from "@/routes/pathName"

export default function Certification() {
    return (
        <>
            <div>
                <section className="my-20">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 gap-6 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                certification.map(({ id, image, certification, organization, time, link }) => {
                                    if (id === 4 || id === 7 || id === 9 || id === 11 || id === 12 || id === 16) {
                                        return <CertificationBlock key={id} image={image} certification={certification} organization={organization} time={time} link={link} />
                                    }
                                })
                            }
                        </div>
                    </div>
                </section>
                <div className="text-center mb-20">
                    <Link href={PATH_NAME.ALLCERTIFICATION}>
                        <button type="button" className="inline-flex items-center justify-center px-5 py-4 text-base font-semibold transition-all duration-200 rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300">
                            More certifications
                            <MdLaunch className="w-5 h-5 ml-3 -mr-1" />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
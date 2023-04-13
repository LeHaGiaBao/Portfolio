import { contest } from "@/data/contest"
import ContestBlock from "@/components/Contest/ContestBlock"

export default function Contest() {
    return (
        <>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl my-20">
                {
                    contest.map(({ id, image, title, time, organization }) => {
                        return <ContestBlock key={id} image={image} title={title} time={time} organization={organization} />
                    })
                }
            </div>
        </>
    )
}
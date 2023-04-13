import { achievement } from "@/data/achievement"
import AchievementBlock from "@/components/Achievement/AchievementBlock"

export default function Achievement() {
    return (
        <>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl my-20">
                {
                    achievement.map(({ id, image, title, time, organization }) => {
                        return <AchievementBlock key={id} image={image} title={title} time={time} organization={organization} />
                    })
                }
            </div>
        </>
    )
}
export default function HomeTitle({ title }: any) {
    return (
        <>
            <div className="text-center py-20">
                <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[25px] border-[#4ADE80]"></span>
                    <h1 className="relative text-4xl font-bold text-black dark:text-white sm:text-6xl lg:text-7xl">{title}</h1>
                </div>
            </div>
        </>
    )
}
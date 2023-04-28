export default function HomeTitle({ title }: any) {
    return (
        <>
            <div className="text-center pt-20 pb-10 md:py-20">
                <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[25px] border-[#4ADE80] dark:border-gray-600"></span>
                    <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-[#4ADE80]">{title}</h1>
                </div>
            </div>
        </>
    )
}
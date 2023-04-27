export default function Title({ title }: any) {
    return (
        <>
            <div className="flex items-end justify-between mt-20 mb-10">
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-xl font-bold leading-tight text-gray-900 dark:text-gray-300 sm:text-4xl lg:text-3xl">
                        <span className="border-b-4 border-yellow-400">{title}</span>
                    </h2>
                </div>
            </div>
        </>
    )
}
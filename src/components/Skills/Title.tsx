export default function Title({ title, sub }: any) {
    return (
        <>
            {
                sub === "" ?
                    <div className="flex items-end justify-between mt-20">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-gray-300 sm:text-4xl lg:text-3xl">
                                <span className="border-b-4 border-cyan-500">{title}</span>
                            </h2>
                        </div>
                    </div>
                    :
                    <div className="flex items-end justify-between mt-20">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-gray-300 sm:text-4xl lg:text-3xl">
                                <span className="border-b-4 border-cyan-500">{title}</span>
                            </h2>
                            <p className="text-xl font-bold leading-tight text-gray-900 dark:text-gray-300 my-5">
                                {sub}
                            </p>
                        </div>
                    </div>
            }
        </>
    )
}
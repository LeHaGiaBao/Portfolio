export default function GitHubStats({ icon, stats, name }: any) {
    return (
        <>
            <div className="overflow-hidden bg-white rounded-lg">
                <div className="px-7 py-9">
                    <div className="flex items-center">
                        {icon}
                        <h3 className="ml-5 text-6xl text-center font-bold text-gray-900">
                            {stats}
                        </h3>
                        <p className="ml-5 text-2xl text-gray-600 md:max-w-xs">{name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
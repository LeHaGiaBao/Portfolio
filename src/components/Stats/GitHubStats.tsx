export default function GitHubStats({ icon, stats, name }: any) {
    return (
        <>
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div className="px-4 py-6">
                    <div className="flex items-start">
                        {icon}
                        <div className="ml-4">
                            <h4 className="text-4xl font-bold text-gray-900">{stats}</h4>
                            <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">{name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
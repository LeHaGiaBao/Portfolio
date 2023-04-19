export default function ContactBlock({ icon, info, href }: any) {
    return (
        <>
            <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-10">
                    {icon}
                    <a href={href}>
                        <p className="mt-7 mb-2 text-xl font-medium text-gray-900">{info}</p>
                    </a>
                </div>
            </div>
        </>
    )
}
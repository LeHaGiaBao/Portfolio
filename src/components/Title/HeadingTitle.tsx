export default function HeadingTitle({ title }: any) {
    return (
        <>
            <div className="text-center my-20">
                <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900">
                    <span className="border-b-4 border-[#4ADE80]"> {title} </span>
                </h2>
            </div>
        </>
    )
}
export default function HeadingTitle({ title }: any) {
    return (
        <>
            <section className="py-10 sm:py-16 lg:py-20">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900">
                            <span className="border-b-4 border-[#4ADE80]"> {title} </span>
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}
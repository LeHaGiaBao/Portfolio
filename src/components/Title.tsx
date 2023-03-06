export default function Title({ title }: any) {
    return (
        <>
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="mt-12 mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">{title}</h2>
                </div>
            </section>
        </>
    )
}
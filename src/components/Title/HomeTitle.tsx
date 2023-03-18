export default function HomeTitle({ title }: any) {
    return (
        <>
            <section className="">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-4xl font-bold leading-none text-center sm:text-5xl section-heading font-Montserrat text-blue-500" data-outline={`${title}`}>{title}</h2>
                </div>
            </section>
        </>
    )
}
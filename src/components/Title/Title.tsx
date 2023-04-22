export default function Title({ title }: any) {
    return (
        <>
            <section className="">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="my-24 lg:my-32 text-7xl font-bold leading-none text-center sm:text-8xl section-heading font-Montserrat text-black dark:text-white" data-outline={`${title}`}>{title}</h2>
                </div>
            </section>
        </>
    )
}
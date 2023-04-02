export default function HomeTitle({ title, subTitle }: any) {
    return (
        <>
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">{title}</h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">{subTitle}</p>
            </div>
        </>
    )
}
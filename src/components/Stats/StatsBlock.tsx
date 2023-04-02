export default function StatsBlock({ number, title, content }: any) {
    return (
        <>
            <div className="item">
                <h2 className="number">{number}</h2>
                <h3 className="stats-sub-heading">{title}</h3>
                <p>
                    {content}
                </p>
            </div>
        </>
    )
}
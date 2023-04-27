import CountUp, { useCountUp } from 'react-countup';

export default function StatsBlock({ number, title, content }: any) {
    return (
        <>
            <div className="item dark:text-gray-300">
                <h2 className="number">
                    <CountUp end={number} enableScrollSpy scrollSpyOnce className="number" />
                    +
                </h2>
                <h3 className="stats-sub-heading">{title}</h3>
                <p>
                    {content}
                </p>
            </div>
        </>
    )
}
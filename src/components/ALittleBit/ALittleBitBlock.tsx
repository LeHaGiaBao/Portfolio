import CountUp, { useCountUp } from 'react-countup';

export default function ALittleBitBlock({ number, title }: any) {
    return (
        <>
            <div>
                <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        <CountUp end={number} enableScrollSpy scrollSpyOnce className="number" />
                        +
                    </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900">{title}</p>
            </div>
        </>
    )
}
import React from 'react';
import styles from './GitHubStats.module.scss'
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import CountUp, { useCountUp } from 'react-countup';

const Tilt = (props: any) => {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current!, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

interface GitHubStats {
    icon: any,
    stats: any,
    name: any
}

function GitHubStats({ icon, stats, name }: GitHubStats) {
    const options = {
        scale: 1.0,
        speed: 1000,
        max: 10,
        glare: true,
        'max-glare': 0.5,
        reverse: true,
    };

    return (
        <>
            <Tilt options={options}>
                <div className="overflow-hidden text-black border border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                    <div className="px-4 py-6">
                        <div className="flex items-start">
                            {icon}
                            <div className="ml-4">
                                <h4 className="text-4xl font-bold text-gray-900 dark:text-gray-300">
                                    <CountUp end={stats} enableScrollSpy scrollSpyOnce className="number" />
                                </h4>
                                <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">{name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Tilt>
        </>
    )
}

export default GitHubStats
import React, { useEffect, useRef } from 'react';
import styles from './ContactBlock.module.scss'
import VanillaTilt from 'vanilla-tilt';

const Tilt = (props: any) => {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current!, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

interface ContactBlock {
    icon: any,
    info: any,
    href: any,
}

function ContactBlock({ icon, info, href }: ContactBlock) {
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
                <div className="overflow-hidden rounded-xl text-black border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-2 hover:border-cyan-500">
                    <div className="p-10">
                        {icon}
                        <a href={href}>
                            <p className="mt-7 mb-2 text-base md:text-xl text-center font-medium">{info}</p>
                        </a>
                    </div>
                </div>
            </Tilt>
        </>
    )
}

export default ContactBlock
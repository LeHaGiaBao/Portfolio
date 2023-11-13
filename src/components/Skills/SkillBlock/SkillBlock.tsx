import React, { useEffect, useRef } from 'react';
import styles from './SkillBlock.module.scss'
import VanillaTilt from 'vanilla-tilt';
import Image from "next/image"

const Tilt = (props: any) => {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current!, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

interface SkillBlock {
    image: any,
    name: any,
}

function SkillBlock({ image, name }: SkillBlock) {
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
                <div className="overflow-hidden text-black border border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md border-2 hover:border-cyan-500">
                    <div className="p-8">
                        <div className="flex items-center">
                            <Image src={image} alt="" className="flex-shrink-0 w-12 h-auto" />
                            <div className="ml-5 mr-auto">
                                <p className="text-xl font-semibold">{name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Tilt>
        </>
    )
}

export default SkillBlock
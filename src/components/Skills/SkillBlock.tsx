import { useEffect, useRef } from 'react';
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

export default function SkillBlock({ image, name }: any) {
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
                <div className="overflow-hidden bg-white rounded-md border-2 hover:border-yellow-400">
                    <div className="p-8">
                        <div className="flex items-center">
                            <Image src={image} alt="" className="flex-shrink-0 w-12 h-auto" />
                            <div className="ml-5 mr-auto">
                                <p className="text-xl font-semibold text-black">{name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Tilt>
        </>
    )
}
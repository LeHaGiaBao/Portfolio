import React from 'react';
import styles from './DoingBlock.module.scss'
import Image from "next/image"
import { motion } from "framer-motion";

interface DoingBlock {
    image: any,
    title: string,
    content: string,
}

function DoingBlock({ image, title, content }: DoingBlock) {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <div className="h-full overflow-hidden text-black border border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md shadow">
                <div className="px-8 py-12">
                    <div className="relative w-24 h-24 mx-auto">
                        <Image src={image} alt="" className="relative object-cover w-24 h-24 mx-auto" />
                    </div>
                    <p className="text-3xl font-semibold mt-9 capitalize">{title}</p>
                    <blockquote className="mt-7 text-left">
                        <p className="text-base">{content}</p>
                    </blockquote>
                </div>
            </div>
        </motion.div>
    );
}

export default DoingBlock;
import React from 'react';
import './DividersWithHeading.module.scss'

function DividersWithHeading({ title }: any) {
    return (
        <>
            <h3 className="my-8 flex items-center">
                <span
                    className="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"
                />
                <span className="mx-3 text-lg font-medium">{title}</span>
                <span
                    className="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"
                />
            </h3>
        </>
    );
}

export default DividersWithHeading;
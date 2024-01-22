import React from 'react';
import styles from './ChangeTheme.module.scss'
import { FiSun } from 'react-icons/fi';
import { BsMoonStarsFill } from 'react-icons/bs'
import { useTheme } from 'next-themes';

function ChangeTheme() {
    const { systemTheme, theme, setTheme } = useTheme()

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <>
            <div className="fixed end-6 bottom-6 group">
                {
                    currentTheme === "dark"
                        ?
                        <>
                            <button onClick={() => setTheme('light')} className="flex items-center justify-center text-white rounded-full w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl drop-shadow-xl">
                                <FiSun className="w-5 h-5 transition-transform group-hover:-rotate-45" />
                            </button>
                        </>
                        :
                        <>
                            <button onClick={() => setTheme('dark')} className="flex items-center justify-center text-white rounded-full w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl drop-shadow-xl">
                                <BsMoonStarsFill className="w-5 h-5 transition-transform group-hover:-rotate-12" />
                            </button>
                        </>
                }
            </div>
        </>
    );
}

export default ChangeTheme;
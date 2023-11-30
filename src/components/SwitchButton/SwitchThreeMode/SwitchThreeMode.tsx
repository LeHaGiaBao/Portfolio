import React, { useEffect, useState } from 'react';
import './SwitchThreeMode.module.scss'

function SwitchThreeMode() {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            setMode('dark');
            document.documentElement.classList.add('dark');
        } else if (savedTheme === 'light') {
            setMode('light');
            document.documentElement.classList.remove('dark');
        } else {
            // If no theme is stored in localStorage, use the system preference
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setMode(prefersDarkMode ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', prefersDarkMode);
        }
    }, []);

    const toggleDarkMode = (newMode: any) => {
        setMode(newMode);

        if (newMode === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else if (newMode === 'light') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            // If system mode is selected, use the system preference
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.classList.toggle('dark', prefersDarkMode);
            localStorage.setItem('theme', 'system');
        }
    };

    return (
        <>
            <div className="border rounded-full p-1 flex">
                <button
                    onClick={() => toggleDarkMode('light')}
                    className={`rounded-full h-8 w-8 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center focus:outline-none ${mode === 'light' ? 'bg-gray-100 text-gray-900' : ''}`}
                >
                    <span className="text-base material-symbols-outlined">light_mode</span>
                </button>
                <button
                    onClick={() => toggleDarkMode('system')}
                    className={`rounded-full h-8 w-8 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center focus:outline-none ${mode === 'system' ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300' : ''}`}
                >
                    <span className="text-base material-symbols-outlined">desktop_windows</span>
                </button>
                <button
                    onClick={() => toggleDarkMode('dark')}
                    className={`rounded-full h-8 w-8 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center focus:outline-none ${mode === 'dark' ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300' : ''}`}
                >
                    <span className="text-base material-symbols-outlined foo">dark_mode</span>
                </button>
            </div>
        </>
    );
}

export default SwitchThreeMode;
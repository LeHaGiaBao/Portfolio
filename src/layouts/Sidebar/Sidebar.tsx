import React from 'react';
import styles from './Sidebar.module.scss'
import { Element2 } from 'iconsax-react';
import { CiLogout } from 'react-icons/ci'
import { signOut } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';
import { PATH_NAME } from '@/routes/pathName';
import { useRouter } from 'next/router';

function Sidebar() {
    const router = useRouter()
    const path = router.asPath.substring(1)
    const capitalizedPath = path
        .split('/')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('/');

    const handleLogout = () => {
        signOut(auth).then(() => {
            window.location.href = PATH_NAME.LOGIN
            console.log("Signed out successfully")
        }).catch((error) => {
        });
    }

    return (
        <>
            <div className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'>
                <div className="h-screen p-3 space-y-2 w-60 bg-gray-50 text-gray-900">
                    <div className="items-center p-5">
                        <h2 className="text-3xl font-semibold capitalize relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                            Admin Page
                        </h2>
                    </div>
                    <div className="divide-y divide-gray-300">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg py-2 text-center">
                                <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <Element2 className="w-5 h-5 fill-current" />
                                    <span>Admin Dashboard</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="pt-4 pb-2 space-y-1 text-sm">
                            <li onClick={handleLogout} className="bg-gray-50 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg py-2 text-center cursor-pointer">
                                <a className="flex items-center p-2 space-x-3 rounded-md">
                                    <CiLogout className="w-5 h-5 fill-current" />
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
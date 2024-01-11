import React from 'react';
import styles from './AdminPage.module.scss'
import Sidebar from '@/layouts/Sidebar';
import HomePageManagement from '../HomePageManagement';

function AdminPage() {
    return (
        <>
            <div className="bg-white h-screen">
                <Sidebar />
                <div className="p-4 sm:ml-60">
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black">Home Page Management</h2>
                        <HomePageManagement />
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black">About Page Management</h2>
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black">Works Page Management</h2>
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black">Portfolio Page Management</h2>
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black">Contact Page Management</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminPage;
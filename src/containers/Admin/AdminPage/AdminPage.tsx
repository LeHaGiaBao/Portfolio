import React from 'react';
import styles from './AdminPage.module.scss'
import Sidebar from '@/layouts/Sidebar';
import Stats from '@/containers/Work/Stats';
import GitHub from '@/containers/Work/GitHub';

function AdminPage() {
    return (
        <>
            <div className="bg-white h-screen">
                <Sidebar />
                <div className="p-4 sm:ml-60">
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black">GitHub Stats</h2>
                        <div className="text-right">
                            <Stats />
                        </div>
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black">GitHub Contribution</h2>
                        <div className="text-right">
                            <GitHub />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminPage;
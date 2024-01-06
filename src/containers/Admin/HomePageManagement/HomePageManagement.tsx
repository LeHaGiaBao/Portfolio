import React from 'react';
import styles from './HomePageManagement.module.scss'
import BannerView from './Banner/BannerView';

function HomePageManagement() {
    return (
        <>
            <section className="p-6">
                <h2 className="text-2xl font-bold leading-tight text-blue-800 text-left">Banner</h2>
                <BannerView />
            </section>
        </>
    );
}

export default HomePageManagement;
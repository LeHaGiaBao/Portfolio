import React from 'react';
import styles from './Error.module.scss'
import Navbar from '@/layouts/Navbar';
import ErrorAdmin from '@/components/Error/ErrorAdmin';
import Footer from '@/layouts/Footer';

function Error() {
    return (
        <>
            <Navbar />
            <ErrorAdmin />
            <Footer />
        </>
    );
}

export default Error;
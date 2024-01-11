import React, { useEffect, useState } from 'react';
import styles from './BannerView.module.scss'
import { ArrowRight } from 'iconsax-react'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

interface Banner {
    id: string,
    avatar: string,
    title: string,
    subtitle: string,
}

function BannerView() {
    const [content, setContent] = useState<Banner[]>([]);

    const fetchData = async () => {
        const data = collection(db, "banner");

        const unsubscribe = onSnapshot(data, (querySnapshot) => {
            const newData: Banner[] = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Banner[];
            setContent(newData);
        });
        return () => unsubscribe();
    }

    useEffect(() => {
        const unsubscribe = fetchData();
        return () => {
            unsubscribe;
        }
    },)

    return (
        <>
            <div className='flex flex-col'>
                {
                    content.map((banner: Banner) => {
                        return (
                            <>
                                <div className='self-center'>
                                    <img className="rounded-full w-52 h-52" src={banner.avatar} alt="image description" />
                                </div>
                                <p className="text-xl mt-5 flex flex-row">
                                    <ArrowRight className='mr-2' />
                                    {banner.title}
                                </p>
                                <p className="text-xl mt-5 flex flex-row">
                                    <ArrowRight className='mr-2' />
                                    {banner.subtitle}
                                </p>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

export default BannerView;
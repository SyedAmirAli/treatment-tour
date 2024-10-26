'use client';
import Loading from '@/app/components/commons/Loading';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function NavigationLoading() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => setIsLoading(true);
        const handleComplete = () => setIsLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        // Cleanup events on unmount
        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return <Loading value={isLoading} />;
}

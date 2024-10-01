'use client';
import Brands from './Brands';
import CategoryBanner from './CategoryBanner';
import ClinicCard from './ClinicCard';
import Services from './Services';

export default function HomeRoot() {
    return (
        <>
            <CategoryBanner />
            <ClinicCard />
            <Services />
            <Brands />
        </>
    );
}

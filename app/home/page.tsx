'use client';
import Brands from './Brands';
import CategoryBanner from './CategoryBanner';
import ElementCard from './ElementCard';
import Services from './Services';

export default function HomeRoot() {
    return (
        <>
            <CategoryBanner />
            <ElementCard />
            <Services />
            <Brands />
        </>
    );
}

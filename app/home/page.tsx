"use client";
import Brands from "./Brands";
import CategoryBanner from "./CategoryBanner";
import ClinicCard from "./ClinicCard";
import Services from "./Services";

export default function HomeRoot() {
    return (
        <div className="w-full px-2 flex flex-col items-center justify-center">
            <CategoryBanner />
            <ClinicCard />
            <Services />
            <Brands />
        </div>
    );
}

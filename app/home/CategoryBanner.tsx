import info from "@/assets/info";
import { useGetCategoriesQuery } from "@/redux/api/apiSlice";
import React from "react";
import Loading from "../components/commons/Loading";
import CategoryBannerItem, {
    CategoryBannerItemType,
} from "./CategoryBannerItem";

export default function CategoryBanner() {
    const { isError, isLoading, error, data } =
        useGetCategoriesQuery(undefined);

    info(
        "CategoryBanner.tsx",
        "useGetCategoriesQuery",
        { isError, isLoading, error, data }
        // "ignores"
    );

    if (isLoading) return <Loading />;

    return (
        <div className="container">
            <div className="flex flex-wrap sm:items-center justify-center gap-2.5 px-2 sm:gap-5 py-5">
                {data?.map((content: CategoryBannerItemType) => (
                    <CategoryBannerItem
                        key={content.id}
                        categoryBanner={content}
                    />
                ))}
            </div>
        </div>
    );
}

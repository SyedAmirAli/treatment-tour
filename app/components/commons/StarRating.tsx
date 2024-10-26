import assets from '@/assets';
import React from 'react';

interface StarRatingProps {
    averageRating: number;
    totalStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
    averageRating,
    totalStars = 5,
}) => {
    const renderStars = () => {
        return Array.from({ length: totalStars }).map((_, i) => (
            <i
                key={i}
                className={`size-5 p-0.5 rounded block ${
                    i < averageRating
                        ? 'bg-primary fill-white text-white'
                        : 'bg-white fill-slate-500 text-primary'
                }`}>
                {assets.svg.starFill}
            </i>
        ));
    };

    return <li className='flex gap-0.5'>{renderStars()}</li>;
};

export default StarRating;

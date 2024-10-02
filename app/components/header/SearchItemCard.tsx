import assets from '@/assets';
import { useAppDispatch } from '@/redux/hooks';
import { setSearch } from '@/redux/slices/HeaderSlice';
import Link from 'next/link';

export interface ItemProps {
    id: number;
    title: string;
    caption?: string;
    rating: number;
    totalRating: number;
    description?: string;
}

export default function SearchItemCard({
    id,
    rating,
    title,
    totalRating,
    caption = '',
    description = '',
}: ItemProps) {
    const dispatch = useAppDispatch();
    function closeSearchModal() {
        dispatch(setSearch({ status: false }));
    }

    return (
        <div key={id} className='pr-0 lg:pr-4 py-2'>
            <div className='w-full bg-slate-50 border border-solid border-slate-200 rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] py-2 px-4'>
                <div className='w-full flex flex-col gap-2 md:gap-0 items-start sm:flex-row sm:items-center justify-between'>
                    <h3 className='text-lg flex font-medium text-slate-700 break-words'>
                        <Link
                            href={`/clinic/${id}`}
                            onClick={closeSearchModal}
                            className='leading-5 hover:text-primary hover:underline duration-300'>
                            {title}
                        </Link>

                        {caption && (
                            <span className='px-2 block text-nowrap h-5 rounded-full ml-3 bg-blue-500 text-slate-100 pt-px font-medium text-xs tracking-wide capitalize'>
                                {caption}
                            </span>
                        )}
                    </h3>
                    <div className='mb-1 flex gap-0.5 fill-primary items-center justify-center'>
                        {new Array(5).fill(0).map((_, i) => (
                            <i key={i} className='block size-4'>
                                {i >= rating
                                    ? assets.svg.star
                                    : assets.svg.starFill}
                            </i>
                        ))}

                        <p className='pl-2 text-sm font-medium text-slate-500 tracking-wide'>
                            ({totalRating})
                        </p>
                    </div>
                </div>
                <Link
                    href={`/clinic/${id}`}
                    onClick={closeSearchModal}
                    dangerouslySetInnerHTML={{ __html: description }}
                    className='text-sm leading-[1.3] pt-1 duration-300 hover:text-blue-500 block hover:underline'></Link>
            </div>
        </div>
    );
}

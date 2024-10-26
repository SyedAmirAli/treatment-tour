import assets from '@/assets';
import { asset } from '@/assets/info';
import Image from 'next/image';
import Link from 'next/link';
import StarRating from '../components/commons/StarRating';

export interface ClinicItemType {
    id: number;
    name: string;
    description: string;
    address: string;
    main_image: string;
    gallery_images: string;
    map_embed_code: string;
    country_id: string;
    state_id: string;
    created_at: string;
    country: string;
    state: string;
    average_rating: number;
}

export default function ClinicItem({ clinic }: { clinic: ClinicItemType }) {
    const { id, name, address, main_image, average_rating } = clinic;

    const type = id % 2 === 0 ? 'premium' : 'new';

    return (
        <Link
            href={'/clinic/' + id}
            className='block w-full md:w-[47%] xl:w-[31%] 2xl:w-[23%] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] rounded-2xl'>
            <figure className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group">
                <Image
                    src={asset(main_image)}
                    alt={name}
                    fill
                    unoptimized
                    className='rounded-t-xl duration-500 hover:scale-105 object-cover'
                />

                {type === 'premium' && (
                    <p className='-rotate-45 top-6 -left-9 z-10 absolute py-0.5 px-9 bg-green-500 text-slate-100 font-medium uppercase'>
                        PREMIUM
                    </p>
                )}

                {type === 'new' && (
                    <p className='absolute top-2 left-2 bg-primary text-sm py-1 px-3 rounded-lg z-20 text-slate-100 font-medium uppercase'>
                        NEW
                    </p>
                )}

                <ul className='absolute right-0 flex top-0 opacity-0 duration-500 group-hover:opacity-100'>
                    <li className='py-2'>
                        <button className='size-9 p-2 text-primary fill-primary bg-white rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] hover:bg-primary hover:fill-white duration-500'>
                            {assets.svg.cartDown}
                        </button>
                    </li>
                    <li className='p-2'>
                        <button className='size-9 p-2 text-green-500 fill-green-500 bg-white rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] hover:bg-green-500 hover:fill-white duration-500'>
                            {assets.svg.handHoldingHeart}
                        </button>
                    </li>
                </ul>
            </figure>
            <div className='p-4'>
                <div className=' flex w-full justify-between items-start gap-1'>
                    <h2 className='break-all font-bold text-lg text-slate-900 hover:underline hover:text-primary duration-500'>
                        {name}
                    </h2>
                    <ul className='flex gap-0.5  justify-end'>
                        <li className='font-bold pr-2 text-slate-400'>
                            ({average_rating})
                        </li>
                        <StarRating averageRating={average_rating} />{' '}
                    </ul>
                </div>
                <h4 className='w-full'>{address}</h4>
            </div>
        </Link>
    );
}

'use client';
import BrandCarousel from '@/app/home/BrandCarousel';
import info from '@/assets/info';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function ClinicPage() {
    const { slug } = useParams();
    const [isGalleyModal, setIsGalleyModal] = useState(false);
    info(slug);

    return (
        <div className='container py-10'>
            <Intro />

            {isGalleyModal && (
                <ViewIntoImages closeModal={() => setIsGalleyModal(false)} />
            )}

            <Gallery openModal={() => setIsGalleyModal(true)} />

            <Appoint />

            <ProcessAndProcedures />

            <Review />

            <AdditionalServices />

            <Doctors />

            <AfterBefore />

            <PaymentService />

            <OperationHour />

            <Map />
        </div>
    );
}

function ViewIntoImages({ closeModal }: { closeModal: () => void }) {
    const [activeImg, setActiveImg] = useState('/images/img-1.png');

    return (
        <div className='fixed left-0 top-0 bg-black/30 w-full z-10 h-screen max-h-screen flex items-center justify-center'>
            <div className='container py-20 relative'>
                <div className='w-full bg-white pt-20 rounded-lg relative'>
                    <figure
                    // className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group"
                    >
                        <Image
                            className='rounded-t-xl w-full object-cover h-[76vh]'
                            src={activeImg}
                            alt='activeImg'
                            height={100}
                            width={100}
                        />

                        <button
                            className='absolute top-28 right-7 bg-red-500 duration-500 hover:rotate-180 py-4 px-[22.5px] rotate-45 hover:bg-primary text-white rounded-full text-xl'
                            onClick={closeModal}>
                            <i className='fa-solid fa-xmark'></i>
                        </button>
                    </figure>

                    <div className='flex items-center justify-center p-4 gap-4 flex-wrap'>
                        {[
                            '/images/img-4.png',
                            '/images/img-2.png',
                            '/images/img-3.png',
                            '/images/img-4.png',
                        ].map((img, i) => (
                            <figure
                                key={i}
                                className='cursor-pointer'
                                onClick={() => setActiveImg(img)}>
                                <Image
                                    className='rounded-xl !w-28 !h-28 border-solid border-primary'
                                    src={img}
                                    alt=''
                                    height={100}
                                    width={100}
                                    style={{
                                        borderWidth:
                                            img === activeImg ? '4px' : '0',
                                    }}
                                />
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function AfterBefore() {
    return (
        <div className='flex flex-col px-6'>
            <div className='flex w-full items-center cursor-pointer justify-between'>
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                    After & Before
                </h1>
                <i className='fa-solid fa-angle-down mr-4'></i>
            </div>
            <BrandCarousel
                height={200}
                brands={[
                    { id: 1, title: '', image: '/images/img-1.png' },
                    { id: 2, title: '', image: '/images/img-2.png' },
                    { id: 3, title: '', image: '/images/img-3.png' },
                    { id: 4, title: '', image: '/images/img-4.png' },
                    { id: 5, title: '', image: '/images/1.jpg' },
                ]}
            />
        </div>
    );
}

function AdditionalServices() {
    return (
        <div className='py-6 bg-white border-b-2 w-full rounded-xl'>
            <div className='flex flex-col px-6'>
                <div className='flex w-full items-center cursor-pointer justify-between'>
                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                        Additional Services
                    </h1>
                    <i className='fa-solid fa-angle-down mr-4'></i>
                </div>
                <div className='flex border-t border-solid border-slate-300 mt-3'>
                    <ul className='flex justify-between w-full mt-4'>
                        <li className='font-medium'>
                            <i className='fa-solid fa-stethoscope mr-2'></i>
                            Free Exam
                        </li>
                        <li className='font-medium'>
                            <i className='fa-solid fa-wifi mr-2'></i>
                            Free Wifi
                        </li>
                        <li className='font-medium'>
                            <i className='fa-solid fa-droplet mr-2'></i>
                            Free Water
                        </li>
                        <li className='font-medium'>
                            <i className='fa-solid fa-wheelchair mr-2'></i>
                            Wheelchair Accessible
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Doctors() {
    return (
        <div className='w-full py-10 mt-5'>
            <div className='flex mb-10 border-b border-solid border-slate-300 pb-4 w-full items-center cursor-pointer justify-between'>
                <h1 className='text-3xl font-bold'>Doctors</h1>
                <i className='fa-solid fa-angle-down mr-4'></i>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full'>
                <Doctor />
                <Doctor />
                <Doctor />
                <Doctor />
            </div>
        </div>
    );
}

function Doctor() {
    return (
        <div className='w-full bg-white py-4 pl-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] rounded-3xl '>
            <div className='max-h-[600px] overflow-y-scroll overflow-x-hidden rounded-xl has-scrollbar'>
                <div className='flex gap-2 items-start justify-between'>
                    <figure>
                        <Image
                            width={200}
                            height={200}
                            alt=''
                            src='/images/img-1.png'
                            className=' rounded-full !min-w-40 !min-h-40 !h-40 !w-40'
                        />
                    </figure>
                    <div className='w-full'>
                        <h3 className='text-xl font-bold py-4'>Dhario Juris</h3>
                        <p className='px-2'>
                            <strong className='pr-2'>26</strong>
                            <span>Years Of Experience</span>
                        </p>
                    </div>
                </div>

                <div className='py-5'>
                    <div className='border-t border-solid border-slate-300 pt-3'>
                        <p className='flex gap-3'>
                            <span className='text-xl'>
                                <i className='fa-solid fa-language'></i>
                            </span>
                            <span className='font-semibold text-lg'>
                                Language Spoken
                            </span>
                        </p>
                        <div className='px-4 p-2 pt-1'>
                            {'English,Spanish,Portuguese'
                                .split(',')
                                .map((lang, i) => (
                                    <p
                                        key={i}
                                        className='font-medium text-slate-600'>
                                        {lang}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className='border-t border-solid border-slate-300 pt-1 my-2'>
                        <p className='flex gap-3'>
                            <span className='text-xl'>
                                <i className='fa-solid fa-parachute-box'></i>
                            </span>
                            <span className='font-semibold text-lg'>
                                Associations
                            </span>
                        </p>
                        <div className='px-4 p-2 pt-1 text-md leading-6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sed dignissimos <br />
                            necessitatibus itaque fugiat iste nam ad quasi, rem,
                            iure sit quaerat maxime. <br /> Dolor deleniti
                            voluptate tempore pariatur est dolorum quisquam.
                        </div>
                    </div>

                    <div className='border-t border-solid border-slate-300 pt-1'>
                        <p className='flex gap-3'>
                            <span className='text-xl'>
                                <i className='fa-solid fa-school'></i>
                            </span>
                            <span className='font-semibold text-lg'>
                                Educations
                            </span>
                        </p>
                        <div className='px-4 p-2 pt-1 text-pretty'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatum recusandae perspiciatis ullam
                            voluptatibus fuga nulla, temporibus. <br /> A nam
                            nostrum assumenda quisquam mollitia quis explicabo
                            voluptatem voluptate quam id ut error aperiam?
                            Illum, odio saepe. <br /> nostrum magnam expedita
                            nobis itaque, alias natus necessitatibus velit aut.
                            Nemo, sapiente natus, iure nihil assumenda iste
                            totam veritatis deleniti nulla magnam saepe <br />
                            iusto vitae unde officia! Numquam voluptatem quis
                            cupiditate exercitationem. Molestias delectus
                            nesciunt architecto excepturi dolores repellendus
                            repellat non corporis iste! Voluptates sit explicabo
                            ex doloremque modi iste, eligendi blanditiis. Natus
                            odit deleniti praesentium consequatur!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProcedureItem({
    procedure,
}: {
    procedure: { id: number; title: string; items: never[] };
}) {
    const { title } = procedure;
    const [isActive, setIsActive] = useState(false);

    return (
        <li className='w-full'>
            <button
                className='w-full flex items-center justify-between py-4 border-b border-solid border-slate-300 mb-6'
                onClick={() => setIsActive(!isActive)}>
                <span className='px-2 text-lg font-medium'>{title}</span>
                <span
                    className={`${isActive ? 'rotate-180' : ''} duration-500`}>
                    <i className='fa-solid fa-angle-down mr-4'></i>
                </span>
            </button>

            {isActive && (
                <table className='table_1 table-fixed w-[97%] mt-4 border-collapse my-6 bg-white'>
                    <thead className='text-center bg-gray-100 '>
                        <tr>
                            <th className='border p-2'>PROCEDURE</th>
                            <th className='border p-2'>PRICE</th>
                            <th className='border p-2'>DURATION</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className='text-normal font-normal'>
                            <td className='border p-2'>Labiaplasty</td>
                            <td className='border p-2'>USD 722</td>
                            <td className='border p-2'>7 days</td>
                        </tr>
                        <tr className='text-normal font-normal'>
                            <td className='border p-2'>Vaginoplasty</td>
                            <td className='border p-2'>USD 1444</td>
                            <td className='border p-2'>7 days</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </li>
    );
}

function Review() {
    return (
        <div className='flex flex-col border-b-2 pb-10'>
            <div className='flex justify-between mt-6 w-full'>
                <div className='flex flex-col w-1/2'>
                    <div className='flex mt-5 mb-6'>
                        <i className='fa-solid fa-star'>
                            <span className='ml-1 font-sans font-medium text-lg'>
                                5.00
                            </span>
                        </i>
                        <li className='ml-2'>
                            <span className='font-medium text-lg -ml-3'>
                                4 reviews
                            </span>
                        </li>
                    </div>
                    <div className='flex'>
                        <table className='table-fixed w-full mt-10 mb-10'>
                            <tbody>
                                <tr>
                                    <td className='p-4 font-medium'>
                                        Cleanliness
                                    </td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                                <tr>
                                    <td className='p-4 font-medium'>Value</td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                                <tr>
                                    <td className='p-4 font-medium'>Service</td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex flex-col w-1/2'>
                    <div className='flex mr-20'>
                        <Link
                            href='#'
                            className='border bg-white border-gray-400 hover:text-primary hover:tracking-wide duration-500 text-gray-700 text-center text-md font-bold mt-4 p-3 w-full rounded-md hover:bg-gray-50'>
                            Write a review
                        </Link>
                    </div>
                    <div className='flex'>
                        <table className='table-fixed w-full mt-10 mb-10'>
                            <tbody>
                                <tr>
                                    <td className='p-4 font-medium'>
                                        Cleanliness
                                    </td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                                <tr>
                                    <td className='p-4 font-medium'>Value</td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                                <tr>
                                    <td className='p-4 font-medium'>Service</td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <a
                    href='#'
                    className='border border-gray-700 text-gray-700 text-center text-md font-bold mt-4 p-3 rounded-md hover:bg-gray-50'>
                    Show More Reviews
                </a>
            </div>
        </div>
    );
}

function ProcessAndProcedures() {
    return (
        <div className='mt-8 border-b-2 pb-8'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold'>
                    Prices and Procedures
                </h1>
                <Link
                    href='#'
                    className='shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] border border-solid border-slate-300 uppercase tracking-wide text-primary hover:bg-primary hover:text-white duration-500 hover:tracking-wider p-2 bg-white font-medium rounded-lg text-lg text-center mr-6 mt-4'>
                    Get Qoute
                </Link>
            </div>
            <div className=''>
                <div className='list'>
                    <ul className='list-decimal ml-5 mt-4 font-semibold'>
                        {[
                            {
                                id: 0,
                                title: 'Cosmetic & Plastic Surgery: Breast',
                                items: [],
                            },
                            {
                                id: 0,
                                title: 'Cosmetic & Plastic Surgery: Stomach',
                                items: [],
                            },
                            {
                                id: 0,
                                title: 'Cosmetic & Plastic Surgery: Nose',
                                items: [],
                            },
                            {
                                id: 0,
                                title: 'Weight Loss Surgery',
                                items: [],
                            },
                            {
                                id: 0,
                                title: 'Cosmetic & Plastic Surgery: Eyes',
                                items: [],
                            },
                            {
                                id: 0,
                                title: 'Cosmetic & Plastic Surgery: Body',
                                items: [],
                            },
                        ].map((item, i) => (
                            <ProcedureItem key={i} procedure={item} />
                        ))}
                    </ul>
                </div>
                <div className='w-full mt-6'>
                    <Link
                        href='#'
                        className='w-full block shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] border border-solid border-slate-300 uppercase tracking-wide text-primary hover:bg-primary hover:text-white duration-500 hover:tracking-wider p-2 bg-white font-medium rounded-lg text-lg text-center mr-6 mt-4'>
                        Contact Clinic
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Intro() {
    return (
        <div className='w-full'>
            <div className='flex gap-3 justify-between'>
                <div className='left'>
                    <h1 className='font-bold text-4xl mb-2'>Carlos Merlano</h1>
                    <div className='flex gap-2 items-center justify-center'>
                        <span className='text-primary'>
                            <i className='fa-solid fa-star'></i>
                        </span>
                        <span className='font-bold pr-2 text-lg'>5.00</span>
                        <span className='font-medium underline'>4 reviews</span>
                        <span className='px-1'>Barranquilla, Colombia</span>
                    </div>
                </div>
                <div className='mr-4 mt-10 flex gap-6'>
                    <Link
                        href='#'
                        className='font-semibold duration-500 hover:text-primary'>
                        <i className='fa-solid fa-arrow-up-from-bracket mr-2'></i>
                        Share
                    </Link>
                    <Link
                        href='#'
                        className='font-semibold duration-500 hover:text-primary'>
                        <i className='fa-solid fa-heart mr-2'></i>Save
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Gallery({ openModal }: { openModal: () => void }) {
    return (
        <div className='w-full bg-white flex flex-col lg:flex-row my-6 border border-solid border-slate-300 rounded-md overflow-hidden'>
            <div className='w-full'>
                <figure className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group">
                    <Image
                        className='rounded-t-xl duration-500 hover:scale-105 object-cover'
                        src='/images/img-1.png'
                        alt=''
                        fill
                    />
                </figure>
            </div>
            <div className='w-full flex flex-wrap h-full relative'>
                {[
                    '/images/img-4.png',
                    '/images/img-2.png',
                    '/images/img-3.png',
                    '/images/img-4.png',
                ].map((img, i) => (
                    <div className='w-1/2 overflow-hidden' key={i}>
                        <figure className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group">
                            <Image
                                className='duration-500 hover:scale-105 object-cover'
                                src={img}
                                alt={i + '-img'}
                                fill
                            />
                        </figure>
                    </div>
                ))}

                <div className='absolute bottom-6 right-6 '>
                    <button
                        className='bg-white py-2 px-4 text-center rounded-md flex gap-2 items-center justify-center font-bold text-sm shadow-xl duration-500 hover:tracking-wide hover:bg-primary hover:text-white'
                        onClick={openModal}>
                        <i className='fa-solid fa-box mr-2 text-xl'></i>
                        <span className='capitalize'>Show all photos</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

function Appoint() {
    return (
        <div className='flex flex-col lg:flex-row justify-self-end'>
            <div className='border-b-1 pb-4 lg:pb-0 border-solid mr-6 w-full lg:w-2/3 border-gray-300 relative mb-5'>
                <h1 className='mt-4 text-3xl font-semibold'>
                    About Carlos merlano
                </h1>
                <p className='mt-2 mb-10 text-md text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem maxime soluta libero est repudiandae dolores cum
                    ratione officiis explicabo nulla laboriosam quam dolore,
                    iste officia facere recusandae necessitatibus, obcaecati
                    rem!
                </p>
                <button className='font-medium text-lg bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] px-4 py-2 rounded text-slate-600'>
                    <span className='pr-2'>Show More</span>
                    <i className='fa-solid fa-chevron-down'></i>
                </button>
            </div>
            <div className='ml-2 mt-4 lg:mt-10 w-full lg:w-1/3 top-0'>
                <div className='box flex flex-col border rounded-md p-10 border-gray-200 items-center text-center shadow-xl'>
                    <Link
                        href='#'
                        className='bg-pink-700 p-4 rounded-md w-full text-white text-md hover:bg-pink-800 font-bold duration-500 hover:tracking-wide'>
                        Book Appointment
                    </Link>
                    <Link
                        href='#'
                        className='border border-gray-700 text-gray-700 text-md font-bold mt-4 p-3 w-full rounded-md hover:bg-gray-50 duration-500 hover:tracking-wide hover:text-primary'>
                        Contact Clinic
                    </Link>
                </div>
            </div>
        </div>
    );
}

function PaymentService() {
    return (
        <div className='py-6 bg-white border-b-2 w-full rounded-xl'>
            <div className='flex flex-col px-6'>
                <div className='flex w-full items-center cursor-pointer justify-between'>
                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                        Payment And Services
                    </h1>
                    <i className='fa-solid fa-angle-down mr-4'></i>
                </div>
                <div className='flex border-t border-solid border-slate-300 mt-3'>
                    <div className='flex justify-between items-center w-full mt-4'>
                        {[
                            '/images/bank.png',
                            '/images/cash.jpg',
                            '/images/paypal.png',
                            '/images/visacard.png',
                            '/images/mastercard.svg',
                        ].map((img, i) => (
                            <figure
                                key={i}
                                // className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group h-40"
                            >
                                <Image
                                    className='duration-500 hover:scale-105 object-cover'
                                    src={img}
                                    alt={i + '-img'}
                                    // fill
                                    width={100}
                                    height={100}
                                />
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function OperationHour() {
    return (
        <div className='py-6 bg-white border-b-2 w-full rounded-xl mt-10'>
            <div className='flex flex-col px-6'>
                <div className='flex w-full items-center cursor-pointer justify-between'>
                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                        Operation Hours <span className='px-4'>UTC-06</span>
                    </h1>
                    <i className='fa-solid fa-angle-down mr-4'></i>
                </div>
                <div className='flex border-t border-solid border-slate-300 mt-3'>
                    <ul className='w-full mt-4'>
                        {[
                            { name: 'MONDAY', time: '09:00 - 17:00' },
                            { name: 'TUESDAY', time: '09:00 - 17:00' },
                            { name: 'WEDNESDAY', time: '09:00 - 17:00' },
                            { name: 'THURSDAY', time: '09:00 - 19:00' },
                            { name: 'FRIDAY', time: '09:00 - 17:00' },
                            { name: 'SATURDAY', time: '-' },
                            { name: 'SUNDAY', time: '-' },
                        ].map((item, i) => (
                            <li
                                key={i}
                                className='font-medium w-full flex justify-between items-center py-4 text-slate-500 border-slate-300 border-b border-solid'>
                                <span className='w-full text-start'>
                                    {item.name}
                                </span>
                                <span className='w-full text-end'>
                                    {item.time}
                                </span>
                                <span className='w-full text-start'>{''}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Map() {
    return (
        <div className='py-6 bg-white border-b-2 w-full rounded-xl mt-10'>
            <div className='flex flex-col px-6'>
                <div className='flex w-full items-center cursor-pointer justify-between'>
                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                        Map
                    </h1>
                    <i className='fa-solid fa-angle-down mr-4'></i>
                </div>
                <div className='flex border-t border-solid border-slate-300 mt-5'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28933.8261014166!2d90.1307842!3d24.97535835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d3612fd35e6b%3A0xef0a804192ff4970!2sTarakandi%20Bazar!5e0!3m2!1sen!2sbd!4v1727717878061!5m2!1sen!2sbd'
                        className='w-full min-h-96 lg:min-h-[600px] rounded-lg border-none outline-none'
                        allowFullScreen={true}
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'></iframe>
                </div>
            </div>
        </div>
    );
}

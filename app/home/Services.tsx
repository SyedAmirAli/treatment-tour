import React from 'react';
import ServicesItem from './ServicesItem';
import ServiceDetails from '../components/commons/ServiceDetails';
import { services } from '@/static/homepage.json';

export default function Services() {
    return (
        <div className='container pb-5 lg:py-10'>
            <ServiceDetails title='Why choose Our' name='Treatment Tour' />

            <div className='flex flex-wrap w-full gap-6 py-10 justify-center'>
                {services.map((service: ServicesItemType) => (
                    <ServicesItem key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}
interface ServicesItemType {
    id: number;
    title: string;
    description: string;
    icon: string;
    btn_title: string;
    btn_icon: string;
    btn_url: string;
}

import React from 'react';
import ServicesItem from './ServicesItem';
import ServiceDetails from '../components/commons/ServiceDetails';

export default function Services() {
    return (
        <div className='container pb-5 lg:py-10'>
            <ServiceDetails title='Why choose Our' name='Treatment Tour' />

            <div className='flex flex-wrap w-full gap-6 py-10 justify-center'>
                {[
                    {
                        id: 1,
                        title: 'Sign & Paint VIP Program',
                        description:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos, iste ipsum fugit nulla soluta eveniet magni, repudiandae.',
                        icon: `<i class='fa-solid fa-heart-circle-bolt'></i>`,
                        btn_title: 'learn more',
                        btn_icon: `<i class='fa-solid fa-arrow-right'></i>`,
                        btn_url: '#',
                    },
                    {
                        id: 2,
                        title: 'Quick & Super fast delivery',
                        description:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos, iste ipsum fugit nulla soluta eveniet magni, repudiandae.',
                        btn_icon: `<i class='fa-brands fa-canadian-maple-leaf'></i>`,
                        btn_title: 'Explore now',
                        icon: `<i class='fa-solid fa-truck-moving'></i>`,
                        btn_url: '#',
                    },
                    {
                        id: 3,
                        title: 'Awareness & Support',
                        description:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos, iste ipsum fugit nulla soluta eveniet magni, repudiandae.',
                        btn_icon: `<i class='fa-solid fa-hand'></i>`,
                        btn_title: 'support for help',
                        icon: `<i class='fa-solid fa-hand-holding-hand'></i>`,
                        btn_url: '#',
                    },
                ].map((service) => (
                    <ServicesItem key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

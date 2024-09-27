import React from 'react';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

export default function page() {
    return (
        <div className='container'>
            <div className='w-full flex flex-col items-center justify-center pt-10'>
                <h1 className='text-4xl font-suse font-extrabold'>
                    Contact our team
                </h1>
                <p className='max-w-3xl text-center text-lg text-slate-600 font-light leading-6 mt-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto atque a, aspernatur illum iste cupiditate? Id libero
                    eos, tempora praesentium saepe doloribus.
                </p>
            </div>
            <div className='w-full flex flex-col lg:flex-row gap-0 lg:gap-10'>
                <ContactForm />
                <ContactInformation />
            </div>
        </div>
    );
}

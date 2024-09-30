'use client';
// import assets from '@/assets';
import { useParams } from 'next/navigation';

export default function ClinicPage() {
    const { slug } = useParams();

    return (
        <div>
            <h1>Clinic: {slug}</h1>
        </div>
    );
}

"use client"

import { GeistSans } from 'geist/font/sans';
import { ProjCard } from '@/app/components/projectCard';

const images = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
];
export default function Page() {
    return (
        <div className=" columns-3 gap-8 space-y-8 mb-4">
            {images.map((imageUrl: string, index: number) => (
                <div key={index} className="h-auto max-w-full">
                    {/*<img src={imageUrl} className=" rounded-lg" alt={`Image ${index + 1}`} />*/}
                    <ProjCard key={index} imageUrl={imageUrl} index={index} />
                </div>
            ))}
            {/*<ProjCard imageUrl={imageUrl} index={index} />*/}
        </div>
        
    );
}
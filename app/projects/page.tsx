import { GeistSans } from 'geist/font/sans';

export default function Page() {
    return (
        <p className={`${GeistSans.className} animate-fade-in`}>Project stuff</p>
    );
}
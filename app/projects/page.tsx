import { GeistSans } from 'geist/font/sans';
import { ProjItem } from '@/app/components/projectItem';

export default function Page() {
    return (
        <div className={`${GeistSans.className} animate-fade-in`}>

            <ProjItem />
        </div>
    );
}
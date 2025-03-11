import {useTranslations} from 'next-intl';
import { Services, Introduction, Blogs } from '@/components/shared';


export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <>
            <Introduction />
            <Services />
            <Blogs />
        </>
    );
}

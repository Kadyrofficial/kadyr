import {useTranslations} from 'next-intl';
import { Introduction } from '@/components/shared/introduction';


export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <>
            <Introduction />
            <Introduction />
        </>
    );
}

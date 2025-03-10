import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { Introduction } from '@/components/shared/introduction';


export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <>
            <Introduction />
        </>
    );
}

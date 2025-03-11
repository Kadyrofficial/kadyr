import { Auth } from '@/components/shared/auth';
import {useTranslations} from 'next-intl';


export default function AuthPage() {
    const t = useTranslations('AuthPage');
    return (
        <>
            <Auth />
        </>
    );
}

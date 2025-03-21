import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Footer, Header } from '@/components/shared';
import '../globals.css';


type Locales = (typeof routing.locales)[number];

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: Locales };
}) {
    const { locale } = params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages({ locale: locale as Locales });

    return (
        <html lang={locale}>
            <body className="text-text">
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

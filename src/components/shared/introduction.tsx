import { cn } from "@/lib/utils";
import Image from 'next/image'
import { Button } from "../ui";
import Link from 'next/link'
import { Section } from "./section";
import {useTranslations} from 'next-intl';


interface Props {
    className?: string
}

export const Introduction: React.FC<Props> = ({ className }) => {
    const t = useTranslations("HomePage")

    return (
        <Section id="home" bg={"gray"}>
            <div className={cn('sm:flex sm:flex-row-reverse justify-center', className)}>
                <div className={cn('w-full md:flex md:items-center md:gap-4', className)}>
                    <div className={cn('relative w-3/5 aspect-3/5 hidden md:block *:object-cover *:rounded-md', className)}>
                        <Image src={"/introduction-image-1.jpg"} fill alt={"image"} />
                    </div>
                    <div className={cn('relative w-full aspect-4/5 *:object-cover *:rounded-md', className)}>
                        <Image src={"/introduction-image-1.jpg"} fill alt={"image"} />
                    </div>
                </div>
                <div className={cn('w-full max-w-xl flex flex-col justify-center px-4 md:px-6 py-1 lg:px-15 *:py-2', className)}>
                    <div>
                        <p className={cn('font-bold text-3xl lg:text-4xl xl:text-5xl', className)}>{t('title')}</p>
                        <p className={cn('font-medium text-lg lg:text-xl xl:text-3xl py-1', className)}>{t('subtitle')}</p>
                    </div>
                    <span className={cn('md:text-lg', className)}>{t('description')}</span>
                    <div className={cn('flex gap-2', className)}>
                        <Link className={cn('*:rounded-full *:cursor-pointer *:xl:h-10 *:xl:px-6', className)} href={"#about"}>
                            <Button>{t('about_me_btn')}</Button>
                        </Link>
                        <Link className={cn('*:rounded-full *:cursor-pointer *:xl:h-10 *:xl:px-6', className)} href={"#contact"}>
                            <Button variant={'outline'}>{t('contact_btn')}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}

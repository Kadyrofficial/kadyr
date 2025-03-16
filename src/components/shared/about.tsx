import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import Image from "next/image";
import { Section } from "./section";
import { useTranslations } from "next-intl";


interface Props {
    className?: string;
}

export const About: React.FC<Props> = ({ className }) => {
    const t = useTranslations("AboutPage")

    return (
       <Section bg={"gray"} id={"about"} name={'About'}>
            <div className={cn('w-full flex flex-col gap-2 sm:gap-3 lg:gap-4', className)}>
                <div className={cn('w-full bg-white rounded-lg p-2 sm:p-3', className)}>
                    <div className={cn('w-full flex flex-col items-center', className)}>
                        <span className={cn('text-xl sm:text-2xl md:text-3xl pt-1 sm:pt-2 font-bold', className)}>{t('title')}</span>
                        <span className={cn('text-center p-1 sm:p-2 sm:text-lg md:text-xl', className)}>{t('subtitle')}</span>
                    </div>
                    <div className={cn('py-2 md:py-4 lg:py-6', className)}>
                        <div className={cn('relative w-full max-h-120 aspect-2/1', className)}>
                            <Image src={"/about.webp"} className={cn('h-full max-h-90 w-full object-contain', className)} fill alt={""} />
                        </div>
                    </div>
                </div>
                <div className={cn('w-full bg-white rounded-lg py-5 px-8 md:px-20 md:py-7 lg:px-30', className)}>
                    <div className={cn('py-1 md:py-2 lg:py-3 flex flex-col gap-1 md:gap-2 lg:gap-3', className)}>
                        <p className={cn('text-lg sm:text-xl md:text-2xl font-bold', className)}>{t('content_title')}</p>
                        <p className={cn('md:text-lg', className)}>{t('content')}</p>
                    </div>
                    <div className={cn('py-1 md:py-2 lg:py-3 flex flex-col gap-1 md:gap-2 lg:gap-3', className)}>
                        <p className={cn('text-lg sm:text-xl md:text-2xl font-bold', className)}>What I do</p>
                        <ul className={cn('list-disc leading-10 pl-4 lg:pl-5 md:text-lg', className)}>
                            <li>
                                <span className={cn('font-medium', className)}>Front-end Development</span> – Creating interactive and engaging UI using React, Vue, and modern CSS frameworks.
                            </li>
                            <li>
                                <span className={cn('font-medium', className)}>Back-end Development</span> – Building robust APIs and server-side applications with Node.js, Express, and Django.
                            </li>
                            <li>
                                <span className={cn('font-medium', className)}>Database Management</span> – Designing efficient database architectures using SQL and NoSQL solutions.
                            </li>
                            <li>
                                <span className={cn('font-medium', className)}>Deployment & DevOps</span> – Ensuring smooth deployment with Docker, AWS, and CI/CD pipelines.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
       </Section>
    )
}

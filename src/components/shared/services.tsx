import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Section } from "./section";
import { useTranslations } from "next-intl";


interface Props {
    className?: string
}

export const Services: React.FC<Props> = ({ className }) => {
    const t = useTranslations("ServicesPage")

    const services = [
        {
            'image': '/frontend.webp',
            'title': t("frontend")
        },
        {
            'image': '/backend.webp',
            'title': t("backend")
        },
        {
            'image': '/design.webp',
            'title': t("ui_ux_design")
        },
        {
            'image': '/mobile.webp',
            'title': t("mobile_app")
        }
    ]

    return (
        <Section bg={"white"} name={"Services"} id={t("services")}>
            <div className={cn('flex flex-wrap *:w-full sm:*:w-1/2 *:relative *:aspect-5/3', className)}>
                {services.map((item, index) => (
                    <div key={index} className={cn('relative', className)}>
                        <p className={cn('absolute z-10 w-full h-3/8 text-center text-2xl font-bold text-background items-center flex justify-center', className)}>
                            {item.title}
                        </p>
                        <Image src={item.image} className={cn('p-1 rounded-xl object-cover', className)} fill alt={item.title} />
                    </div>
                ))}
            </div>
        </Section>
    )
}

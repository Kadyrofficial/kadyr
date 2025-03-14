import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Section } from "./section";


interface Props {
    className?: string
}

const services = [
    {
        'image': '/frontend.webp'
    },
    {
        'image': '/backend.webp'
    },
    {
        'image': '/design.webp'
    },
    {
        'image': '/mobile.webp'
    }
]

export const Services: React.FC<Props> = ({ className }) => {

    return (
        <Section bg={"white"} name={"Services"} id={"services"}>
            <div className={cn('flex flex-wrap *:w-full sm:*:w-1/2 *:relative *:aspect-5/3', className)}>
                {services.map((item, index) => (
                    <div key={index}>
                        <Image src={item.image} className={cn('p-1 rounded-xl object-cover', className)} fill alt={""} />
                    </div>
                ))}
            </div>
        </Section>
    )
}

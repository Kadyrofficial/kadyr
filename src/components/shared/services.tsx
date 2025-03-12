import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";


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
        <section id="services" className={cn('w-full flex flex-col items-center py-4', className)}>
            
            <div className={cn('w-full max-w-7xl px-2 sm:px-3 lg:px-4', className)}>
                <div className={cn('p-2', className)}>
                    <span className={cn('px-6 py-1 rounded-full bg-blue-50 font-medium text-primary cursor-pointer', className)}>Services</span>
                </div>
                <div className={cn('w-full flex flex-wrap *:w-full sm:*:w-1/2 *:relative *:aspect-5/3', className)}>
                    {services.map((item, index) => (
                        <div key={index}>
                            <Image src={item.image} className={cn('p-1 rounded-xl object-cover', className)} fill alt={""} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

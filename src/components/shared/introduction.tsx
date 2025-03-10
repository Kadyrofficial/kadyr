import { cn } from "@/lib/utils";
import React from "react";
import Image from 'next/image'
import { Button } from "../ui";


interface Props {
    className?: string
}

export const Introduction: React.FC<Props> = ({ className }) => {

    return (
        <section className={cn(' p-2', className)}>
            <div className={cn(' rounded-xl w-full h-full', className)}>
                <div className={cn('relative w-full aspect-4/5 rounded-xl', className)}>
                    <Image src={"/introduction-image-1.jpg"} fill className={cn('object-cover w-full h-full rounded-xl', className)} alt={"image-1"} />
                </div>
                <div className={cn('flex flex-col p-4 *:py-2', className)}>
                    <div className={cn('flex flex-col', className)}>
                        <span className={cn('font-bold text-2xl', className)}>Hi, I am Kadyr</span>
                        <span className={cn('font-medium text-lg', className)}>Full-stack web developer</span>
                    </div>
                    <span className={cn('', className)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos</span>
                    <div>
                        <Button className={cn('rounded-full', className)}>Contact</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

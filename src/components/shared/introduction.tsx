import { cn } from "@/lib/utils";
import React from "react";
import Image from 'next/image'
import { Button } from "../ui";


interface Props {
    className?: string
}

export const Introduction: React.FC<Props> = ({ className }) => {

    return (
        <section className={cn('w-full flex flex-col items-center pt-14 sm:pt-16 pb-2 sm:pb-6 bg-zinc-100', className)}>
            <div className={cn('rounded-xl px-2 sm:px-3 lg:px-4 w-full max-w-7xl h-full sm:flex sm:flex-row-reverse justify-center', className)}>
                <div className={cn('w-full md:flex md:items-center md:gap-4', className)}>
                    <div className={cn('relative w-3/5 aspect-3/5 hidden md:block', className)}>
                        <Image src={"/introduction-image-1.jpg"} fill className={cn('object-cover rounded-xl', className)} alt={"image-1"} />
                    </div>
                    <div className={cn('relative w-full aspect-4/5', className)}>
                        <Image src={"/introduction-image-1.jpg"} fill className={cn('object-cover rounded-xl', className)} alt={"image-1"} />
                    </div>
                </div>
                <div className={cn('w-full max-w-xl flex flex-col justify-center px-4 md:px-6 py-1 lg:px-15 *:py-2', className)}>
                    <div className={cn('flex flex-col', className)}>
                        <span className={cn('font-bold text-3xl lg:text-4xl xl:text-5xl', className)}>Hi, I am Kadyr</span>
                        <span className={cn('font-medium text-lg lg:text-xl xl:text-3xl', className)}>Full-stack web developer</span>
                    </div>
                    <span className={cn('md:text-lg', className)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos</span>
                    <div className={cn('flex gap-2 *:rounded-full *:cursor-pointer xl:*:h-10 xl:*:px-6', className)}>
                        <Button>About me</Button>
                        <Button variant={'outline'}>Contact</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

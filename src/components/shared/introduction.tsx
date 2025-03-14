import { cn } from "@/lib/utils";
import React from "react";
import Image from 'next/image'
import { Button } from "../ui";
import Link from 'next/link'
import { Section } from "./section";


interface Props {
    className?: string
}

export const Introduction: React.FC<Props> = ({ className }) => {

    return (
        <Section id="home" bg={"gray"}>
            <div className={cn('sm:flex sm:flex-row-reverse justify-center', className)}>
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
                    <div className={cn('flex gap-2 ', className)}>
                        <Link href={"#about"}>
                            <Button className={cn('rounded-full cursor-pointer xl:h-10 xl:px-6', className)}>About me</Button>
                        </Link>
                        <Link href={"#contact"}>
                            <Button className={cn('rounded-full cursor-pointer xl:h-10 xl:px-6', className)} variant={'outline'}>Contact</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}

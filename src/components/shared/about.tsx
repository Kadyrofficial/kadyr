import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";


interface Props {
    className?: string
}

export const About: React.FC<Props> = ({ className }) => {

    return (
        <section id="about" className={cn('w-full flex flex-col items-center py-4 bg-zinc-100', className)}>

            <div className={cn('w-full max-w-7xl px-2 sm:px-3 lg:px-4 flex flex-wrap', className)}>
                <div className={cn('p-2', className)}>
                    <span className={cn('px-6 py-1 rounded-full bg-background font-medium text-primary cursor-pointer', className)}>About</span>
                </div>
                <div className={cn('w-full p-1 flex flex-col gap-2 sm:gap-3 lg:gap-4', className)}>
                    <div className={cn('w-full bg-white rounded-lg p-2 sm:p-3', className)}>
                        <div className={cn('w-full flex flex-col items-center', className)}>
                            <span className={cn('text-xl sm:text-2xl md:text-3xl pt-1 sm:pt-2 font-medium ', className)}>About me</span>
                            <span className={cn('text-center p-1 sm:p-2 sm:text-lg md:text-xl', className)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                        </div>
                        <div className={cn('py-2 md:py-4 lg:py-6', className)}>
                            <div className={cn('relative w-full max-h-120 aspect-2/1', className)}>
                                <Image src={"/about.webp"} className={cn('h-full w-full object-contain', className)} fill alt={""} />
                            </div>
                        </div>
                    </div>
                    <div className={cn('w-full bg-white rounded-lg py-5 px-8 md:px-20 md:py-7 lg:px-30', className)}>
                        <p className={cn('text-lg md:text-xl lg:text-2xl text-center font-medium py-1 md:py-2 lg:py-3', className)}>Lorem ipsum dolor</p>
                        <p className={cn('text-center md:text-lg lg:text-xl py-1 md:py-2 lg:py-3', className)}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ipsum laudantium quas reprehenderit nam culpa odio modi ratione consectetur, neque quidem harum ab pariatur repellendus explicabo a! Eius, ipsam dolores.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

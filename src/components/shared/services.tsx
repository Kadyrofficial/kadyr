import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";


interface Props {
    className?: string
}

export const Services: React.FC<Props> = ({ className }) => {

    return (
        <section className={cn('w-full flex flex-col items-center py-4', className)}>
            <div className={cn('w-full max-w-7xl px-2 sm:px-3 lg:px-4 flex flex-wrap *:w-full sm:*:w-1/2 *:relative *:aspect-5/3', className)}>
                <div>
                    <Image src={"/qw.webp"} className={cn('p-1 rounded-xl object-cover', className)} fill alt={""} />
                </div>
                <div>
                    <Image src={"/5741158.webp"} className={cn('p-1 rounded-xl object-cover', className)} fill alt={""} />
                </div>
                <div>
                    <Image src={"/introduction-image-1.jpg"} className={cn('p-1 rounded-xl object-cover', className)} fill alt={""} />
                </div>
                <div>
                    <Image src={"/introduction-image-1.jpg"} className={cn('p-1 rounded-xl object-cover', className)} fill alt={""} />
                </div>
            </div>
        </section>
    )
}

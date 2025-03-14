import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";


interface Props {
    className?: string;
    children: ReactNode;
    bg: "white" | "gray";
    name?: string | null;
    id: string;
    
}

export const Section: React.FC<Props> = ({ className, children, bg, name = null, id }) => {
    let bgcolor;
    let namebg;

    if (bg == 'white') {
        bgcolor = 'white'
        namebg = 'bg-blue-50'
    } else if (bg == 'gray') {
        bgcolor = 'bg-zinc-100'
        namebg = 'bg-background'
    }

    return (
        <section id={id} className={cn(`flex flex-col items-center p-2 sm:p-4 lg:p-6 ${bgcolor}`, className)}>
            <div className={cn('w-full max-w-7xl', className)}>
                {name && (
                    <div className={cn('p-2', className)}>
                        <span className={cn(`px-6 py-1 rounded-full ${namebg} font-medium text-primary cursor-pointer`, className)}>
                            {name}
                        </span>
                    </div>
                )}
                {children}
            </div>
        </section>
    )
}

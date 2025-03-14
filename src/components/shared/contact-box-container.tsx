import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";


interface Props {
    className?: string;
    title: string;
    children: ReactNode
}

export const ContactBoxContainer: React.FC<Props> = ({ className, children, title }) => {

    return (
        <div className={cn('p-1', className)}>
            <div className={cn('bg-background rounded-lg p-4', className)}>
                <p className={cn('font-medium', className)}>
                    {title}
                </p>
                {children}
            </div>
        </div>
    )
}
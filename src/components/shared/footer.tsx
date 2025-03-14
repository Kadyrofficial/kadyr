import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Section } from "./section";


interface Props {
    className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {

    return (
       <footer className={cn(`flex flex-col items-center px-2 sm:px-4 lg:px-6`, className)}>
            <div className={cn('w-full max-w-7xl', className)}>
                <div className={cn('border-b flex flex-col items-center', className)}>
                    <div className={cn('flex flex-col items-center p-4 gap-2 max-w-3xl', className)}>
                        <p className={cn('text-center text-xl lg:text-2xl font-medium', className)}>Some text</p>
                        <p className={cn('text-center lg:text-lg', className)}>Stay informed and inspired with our collection of blog posts covering a wide range of topics related to education, career development, industry trends, and more.</p>
                    </div>
                    <div className={cn('', className)}>
                        <span></span>
                    </div>
                </div>
                <div>
                    <p className={cn('text-sm py-4', className)}>
                        Copyright © 2025 All rights Reserved
                    </p>
                </div>
            </div>
       </footer>
    )
}

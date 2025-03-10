'use client'

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";


interface MenuData {
    title: string;
  }

interface Props {
    className?: string;
    menuData: MenuData[]
}

export const MenuBar: React.FC<Props> = ({ className, menuData }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <span onClick={() => setIsOpen((prev) => !prev)} className={cn('relative h-full flex items-center px-2', className)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <motion.path d="M3.75 9 H20.25" animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 3 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} />
                    <motion.path d="M3.75 15.75 H20.25" animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -3 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} />
                </svg>
                <nav className={cn(`bg-background shadow-md absolute top-full right-0 border-1 pl-4 pr-8 py-2 rounded-lg transition-all duration-300 opacity-0  ${isOpen ? 'opacity-100 scale-100 translate-y-2' : 'pointer-events-none'}`, className)}>
                    <ul className={cn('font-medium text-lg', className)}>
                        {menuData.map((item, index) => (
                            <Link key={index} href={""}>
                                <li className={cn('py-1', className)}>{item.title}</li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </span>
        </>
    )
}

'use client'

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { MenuBar } from "./menu-bar";
import { User } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";


interface Props {
    className?: string;
}

const menuData = [
    {
        'title': 'Home',
        'link': '#home'
    },
    {
        'title': 'Services',
        'link': '#services'
    },
    {
        'title': 'About',
        'link': '#about'
    },
    {
        'title': 'Blogs',
        'link': '#blogs'
    },
    {
        'title': 'Contact',
        'link': '#contact'
    },
]

const Links: React.FC<Props> = ({ className }) => {
    return (
        <>
            {menuData.map((item, index) => (
                <Link key={index} className={className} href={item.link}>
                    {item.title}
                </Link>
            ))}
        </>
    )
}


export const Header: React.FC<Props> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false); 
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLSpanElement>(null);
    const locale = useLocale()

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    
    return (
        <>
            <header className={cn('z-50 fixed w-full flex flex-col items-center h-12 bg-zinc-50/75 backdrop-blur-md', className)}>
                <div className={cn('w-full max-w-7xl h-full flex justify-between px-2 sm:px-3 lg:px-4', className)}>
                    <Link className={cn('group h-full flex items-center px-2', className)} href={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className={cn('fill-text-hover group-hover:fill-text w-6 h-6', className)}>
                            <path d="M1.81 0.01h5.83v7.13L3.58 11.73l0.81 0.73L15.37 0.01h8.13L12.39 12.48 23.5 25h-8.13l-7.73-8.86v8.86H1.81V0.01z" />
                        </svg>
                    </Link>
                    <div className={cn('h-full hidden sm:flex font-medium', className)}>
                        <Links className={"mx-4 text-text-hover hover:text-text flex items-center h-full"} />
                    </div>
                    <div className={cn('h-full flex', className)}>
                        <Link className={cn('group h-full flex items-center px-2', className)} href={`${locale}/auth`}>
                            <User className={cn('stroke-text-hover group-hover:stroke-text', className)} strokeWidth={1.5} />
                        </Link>
                        <MenuBar buttonRef={buttonRef} isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                </div>
            </header>
            <div ref={menuRef}>
                <nav className={cn(`z-50 bg-background/75 flex flex-col text-lg font-medium *:py-2 *:hover:bg-zinc-100 text-text-hover *:hover:text-text *:rounded-lg *:pr-8 *:pl-4 backdrop-blur-md shadow-sm fixed top-12 right-2 border border-gray-200 p-2 rounded-lg transition-all scale-95 duration-200 opacity-0 sm:hidden ${isOpen ? 'opacity-100 scale-100 translate-y-2' : 'pointer-events-none'}`, className)}>
                    <Links />
                </nav>
            </div>
        </>
    )
}

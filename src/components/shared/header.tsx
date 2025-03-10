import { cn } from "@/lib/utils";
import React from "react";
import Image from 'next/image'
import { MenuBar } from "./menu-bar";


interface Props {
    className?: string
}

const menuData = [
    {
        'title': 'Home'
    },
    {
        'title': 'Services'
    },
    {
        'title': 'Blogs'
    },
    {
        'title': 'Contact'
    },
]

export const Header: React.FC<Props> = ({ className }) => {
    
    return (
        <>
            <header className={cn('z-50 fixed w-full h-12 flex justify-between px-2', className)}>
                <span className={cn('h-full flex items-center px-2', className)}>
                    <Image src={"/logo.svg"} width={24} height={24} alt={"Kadyr"} />
                </span>
                <MenuBar menuData={menuData} />
            </header>
            <div className={cn('h-12', className)} />
        </>
    )
}

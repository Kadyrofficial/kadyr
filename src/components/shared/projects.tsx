import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Section } from "./section";
import Link from "next/link";


interface Props {
    className?: string
}

const projects = [
    {
        'link': '',
        'img': '/introduction-image-1.jpg',
        'hover_txt': 'Visit Site',
        'name': 'Design in the Age og AI: how to adapt lazily',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex, consequuntur'
    },
    {
        'link': '',
        'img': '/introduction-image-1.jpg',
        'hover_txt': 'Visit Site',
        'name': 'Design in the Age og AI: how to adapt lazily',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex, consequuntur'
    },
    {
        'link': '',
        'img': '/introduction-image-1.jpg',
        'hover_txt': 'Visit Site',
        'name': 'Design in the Age og AI: how to adapt lazily',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex, consequuntur'
    },
    {
        'link': '',
        'img': '/introduction-image-1.jpg',
        'hover_txt': 'Visit Site',
        'name': 'Design in the Age og AI: how to adapt lazily',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex, consequuntur'
    },
]

export const Projects: React.FC<Props> = ({ className }) => {

    return (
       <Section bg={"white"} id={"projects"} name={'Projects'}>
            <div className={cn('w-full flex flex-wrap *:w-full *:sm:w-1/2 *:p-1', className)}>
                {projects.map((item, index) => (
                    <Link key={index} className={cn('group', className)} href={item.link}>
                        <div className={cn('relative aspect-5/3 rounded-lg overflow-hidden *:object-cover', className)}>
                            <Image src={item.img} fill alt={item.name} />
                            <div className={cn('absolute top-0 aspect-5/3 bg-zinc-900/40 w-full hidden group-hover:flex items-center justify-center', className)}>
                                <p className={cn('text-center font-bold text-2xl text-background', className)}>{item.hover_txt}</p>
                            </div>
                        </div>
                        <div className={cn('py-2 pl-2 pr-8 *:truncate *:overflow-hidden', className)}>
                            <p className={cn('text-lg font-medium', className)}>{item.name}</p>
                            <p>{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
       </Section>
    )
}

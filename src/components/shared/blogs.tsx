import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { Calendar } from "lucide-react";


interface Props {
    className?: string
}

export const Blogs: React.FC<Props> = ({ className }) => {

    return (
        <section id="blogs" className={cn('w-full flex flex-col items-center py-4', className)}>

            <div className={cn('w-full max-w-7xl px-2 sm:px-3 lg:px-4 flex flex-wrap', className)}>
                <div className={cn('p-2', className)}>
                    <span className={cn('px-6 py-1 rounded-full bg-blue-50 font-medium text-primary cursor-pointer', className)}>Blogs</span>
                </div>
                <div className={cn('w-full p-1', className)}>
                    <div className={cn('relative w-full h-full rounded-xl overflow-hidden', className)}>
                        <div className={cn('relative w-full h-140', className)}>
                            <Image src={"/introduction-image-1.jpg"} className={cn('object-cover', className)} fill alt={""} />
                        </div>
                        <div className={cn('absolute bottom-0 w-full bg-black/60 backdrop-blur-[6px] py-2 md:py-3 px-4 md:px-6', className)}>
                            <p className={cn('text-background text-xl md:text-2xl font-medium py-1', className)}>Design in the Age og AI: how to adapt lazily</p>
                            <p className={cn('text-background md:text-lg text-zinc-100 py-1', className)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex, consequuntur</p>
                            <div className={cn('pt-2 md:flex md:items-end justify-between', className)}>
                                <div className={cn('w-full max-w-sm flex *:w-full py-1', className)}>
                                    <div>
                                        <div>
                                            <div className="group inline-block cursor-pointer">
                                                <div className={cn('relative w-8 h-8 border py-1 border-white sm:border-zinc-100 group-hover:border-white rounded-full overflow-hidden', className)}>
                                                    <Image src={"/introduction-image-1.jpg"} className={cn('object-cover', className)} fill alt={""} />
                                                </div>
                                                <p className={cn('text-white sm:text-zinc-100 group-hover:text-white font-medium py-1', className)}>Kadyr Gullyyev</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div className="group inline-block cursor-pointer">
                                                <div className={cn('relative w-8 h-8 border py-1 border-white sm:border-zinc-100 group-hover:border-white flex items-center justify-center rounded-full overflow-hidden', className)}>
                                                    <Calendar size={20} strokeWidth={1.5} className={cn('stroke-white sm:stroke-zinc-100 group-hover:stroke-white', className)} />
                                                </div>
                                                <p className={cn('text-white sm:text-zinc-100 group-hover:text-white font-medium py-1', className)}>Kadyr Gullyyev</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cn('flex py-1 gap-2 sm:gap-3 md:gap-4 *:border-white sm:*:border-zinc-200  *:rounded-full *:text-white sm:*:text-zinc-100 *:hover:border-white *:hover:text-white *:hover:bg-transparent *:cursor-pointer', className)}>
                                    <Button size={'sm'} variant={'outline'}>Kadyr</Button>
                                    <Button size={'sm'} variant={'outline'}>Kadyr</Button>
                                    <Button size={'sm'} variant={'outline'}>Kadyr</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cn('relative w-full *:w-full flex flex-wrap sm:*:w-1/2 xl:*:w-1/3  *:relative *:aspect-5/3', className)}>
                    <div>
                        <Image src={"/introduction-image-1.jpg"} className={cn('p-1 rounded-xl object-cover', className)} fill alt={""} />
                    </div>
                    <div>
                        <Image src={"/introduction-image-1.jpg"} className={cn('p-1 rounded-xl object-cover', className)} fill alt={""} />
                    </div>
                    <div>
                        <Image src={"/introduction-image-1.jpg"} className={cn('p-1 rounded-xl object-cover', className)} fill alt={""} />
                    </div>
                </div>
            </div>
        </section>
    )
}

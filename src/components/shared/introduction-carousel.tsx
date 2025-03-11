'use client'

import React from "react";
import {cn} from '@/lib/utils'
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui";
import Autoplay from "embla-carousel-autoplay"


interface Props {
    className?: string,
}

export const IntroductionCarousel: React.FC<Props> = ({className}) => {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    )

    return (
        <Carousel className={cn('w-full max-w-lg overflow-hidden rounded-xl', className)} opts={{align: "start", loop: true}} plugins={[plugin.current]}>
            <CarouselContent>
                <CarouselItem className={cn('md:basis-[80%]', className)}>
                    <Image src={'/introduction-image-1.jpg'} width={1500} sizes="100vw" height={0} className={cn('w-full aspect-4/5 object-cover rounded-xl overflow-hidden', className)} alt={""} />
                </CarouselItem>
                <CarouselItem className={cn('md:basis-[80%]', className)}>
                    <Image src={'/introduction-image-1.jpg'} width={1500} sizes="100vw" height={0} className={cn('w-full aspect-4/5 object-cover rounded-xl overflow-hidden', className)} alt={""} />
                </CarouselItem>
                <CarouselItem className={cn('md:basis-[80%]', className)}>
                    <Image src={'/introduction-image-1.jpg'} width={1500} sizes="100vw" height={0} className={cn('w-full aspect-4/5 object-cover rounded-xl overflow-hidden', className)} alt={""} />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}
           
"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'

const CarouselHome = () => {
    
    return (
        <>
            <Carousel>
                <CarouselContent>

                    {/* {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                    ))} */}
                    <CarouselItem>
                        <img src="/assest/image/slider.jpg" alt="" />
                    </CarouselItem>
                    <CarouselItem><img src="/assest/image/slider.jpg" alt="" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}

export default CarouselHome
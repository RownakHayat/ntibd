import React from 'react'
import './style.css'
import Carousel from '../ui/carousel';
import { Button } from '../ui/button';


const CarouselHome = () => {
    let slides = [
        <div onClick={e => console.log(1)} >
            <div className="flex justify-evenly items-center">
                <div className=" items-center">
                    <div onClick={e => console.log()} className='shop_btn mt-[50%]' >
                        <Button className='bg-[#31a74c] hover:bg-[#212529] uppercase px-12 py-7 rounded-3xl text-xl font-normal'>Shope Now</Button>
                    </div>
                </div>
                <div className="flex justify-end items-center text-center">
                    <div className="my-10">
                        <div className="items-center">
                            <h1 className='text-red-400 text-3xl text-wrap'>Digital Pressure Machine, Free</h1>
                        </div>
                        <div className="-mr-10 flex float-right items-center">
                            <img
                                className='rounded-2xl w-[50%] '
                                alt="img1"
                                src="https://theecologist.org/sites/default/files/styles/inline_l/public/2018-05/contre_jour_leaves_lens_flare_meadow_nature_park_sky_summer-948356.jpg?itok=JqgRwHxm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        <div onClick={e => console.log(2)}>
            <div className="flex justify-evenly items-center">
                <div className="items-center">
                    <div onClick={e => console.log()} className='shop_btn mt-[50%]' >
                        <Button className='bg-[#31a74c] hover:bg-[#212529] uppercase px-12 py-7 rounded-3xl text-xl font-normal'>Shope Now</Button>
                    </div>
                </div>
                <div className="flex justify-end items-center text-center">
                    <div className="my-10">
                        <div className="items-center">
                            <h1 className='text-red-400 text-3xl text-wrap'>ডিজিটাল প্রেসার মেশিন</h1>
                        </div>
                        <div className="-mr-10 flex float-right items-center">
                            <img
                                className='rounded-2xl w-[50%]'
                                alt="img1"
                                src="https://theecologist.org/sites/default/files/styles/inline_l/public/2018-05/contre_jour_leaves_lens_flare_meadow_nature_park_sky_summer-948356.jpg?itok=JqgRwHxm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        <div onClick={e => console.log(3)}>
            <div className="flex justify-around items-center">
                <div className="items-center">
                    <div onClick={e => console.log()} className='shop_btn mt-[50%]' >
                        <Button className='bg-[#31a74c] hover:bg-[#212529] uppercase px-12 py-7 rounded-3xl text-xl font-normal'>Shope Now</Button>
                    </div>
                </div>
                <div className=" flex justify-end items-center text-center">
                    <div className="my-10">
                        <div className="items-center">
                            <h1 className='text-red-400 text-3xl text-wrap'>ডিজিটাল প্রেসার মেশিন, ফ্রি</h1>
                        </div>
                        <div className="-mr-10 flex float-right items-center">
                            <img
                                className='rounded-2xl w-[50%]'
                                alt="img1"
                                src="https://theecologist.org/sites/default/files/styles/inline_l/public/2018-05/contre_jour_leaves_lens_flare_meadow_nature_park_sky_summer-948356.jpg?itok=JqgRwHxm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ];


    return (
        <>
            <Carousel
                slides={slides}
                animationType="FADE"
                animationDuration={1000}
                duration={5000}
                animationTimingFunction="linear"
                withNavigation
            />
        </>
    );
}




export default CarouselHome
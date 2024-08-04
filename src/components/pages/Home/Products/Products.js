"use client"

import { Card, CardContent } from '../../../common/ui/card'
import React from 'react'

const Products = () => {
    return (
        <>
            <div>
                <h1 className='text-3xl font-bold font-sans'>Netcom Trade International (NTI)</h1>
                <p>A medical and surgical item importer in Bangladesh (BD); NTI is dedicated to enhancing healthcare accessibility and quality nationwide, with a primary focus on delivering quality products, unmatched delivery service, and dependable after-sales support to its esteemed customers.</p>
            </div>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-bold font-sans'>Featured Products</h1>
                <div className="">
                    <button className='bg-[#FF6C37] px-3 py-2 rounded-md text-white hover:text-[#005F73] font-normal'>See More</button>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <Card className='border-gray-500 border-2 box-border'>
                        <div className="">
                            <button className='bg-[#FF6C37] text-white py-1 px-2 mr-0 ml-[90%] relative flex items-center'><span>20%</span> OFF</button>
                            <img src='/assest/image/product.1.jpg' alt='' />
                        </div>
                        <div className="border-t-2 border-b-2 border-gray-500">
                            <h2>NTI Nebulizer Machine</h2>
                        </div>
                        <CardContent>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Products
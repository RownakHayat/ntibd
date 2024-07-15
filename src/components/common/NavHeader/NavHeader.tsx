"use client"

import React from 'react'
import Dropdown from '../DropdownMenu/DropdownMenu'
import Navigationbar from './NavigationMenu'
import { Link } from 'react-router-dom';
import './navheader.css'

const NavHeader = () => {
    return (
        <>
            <div className="grid grid-rows-2 grid-cols-12">
                <div className="col-span-4">
                    <div className="flex justify-center items-center">
                        <Dropdown />
                    </div>
                </div>
                <div className="col-span-6">
                    <Navigationbar />
                </div>
                <div className="col-span-2">
                    <div className="call-support float-right">
                        <div className="text-xl">
                            <Link to="tel:01886221100" className='hover:text-blue-500 cursor-pointer'>01886221100</Link>
                        </div>
                        <p className='text-xl inline-block relative'><a href='https://wa.me/+8801841777904' className='block hover:text-green-600'>01841777904</a>
                       <span className='block text-right text-base'> WhatsApp</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavHeader
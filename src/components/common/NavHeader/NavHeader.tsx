"use client"

import React from 'react'
import Dropdown from '../DropdownMenu/DropdownMenu'
import Navigationbar from './NavigationMenu'

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
                <div className="col-span-2"></div>
            </div>
        </>
    )
}

export default NavHeader
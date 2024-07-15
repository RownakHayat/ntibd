"use client"
import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropDownMenu";
import { ChevronDown, Menu } from 'lucide-react';


const Dropdown = () => {
    return (
        <>

            <DropdownMenu>
                <DropdownMenuTrigger className='rounded-t-2xl min-w-[18rem] max-w-[80rem] w-auto bg-[#128E45] text-nowrap px-5 py-3 flex justify-between items-center gap-10 focus:outline-none text-xl text-white'>
                    <div className="gap-4 flex">
                        <span>
                            <Menu />
                        </span>
                        All Products
                    </div>
                    <span>
                        <ChevronDown className='text-lg' />
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-white w-full'>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default Dropdown

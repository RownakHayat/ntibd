"use client"
import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropDownMenu";
import { ChevronDown } from 'lucide-react';


const Dropdown = () => {
    return (
        <>

            <DropdownMenu>
                <DropdownMenuTrigger className='rounded-l-3xl bg-slate-100 px-5 py-4 flex gap-3 focus:outline-none text-lg'>All Products
                    <span>
                        <ChevronDown className='text-sm' />
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
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

"use client"
import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hoverCard'
import { UserRound } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '../ui/menulist'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Link } from 'react-router-dom'

const UserProfile = () => {
    return (
        <>
            <HoverCard>
                <HoverCardTrigger className=' inline-block items-center'>
                    <span className='flex justify-center items-center'><UserRound /></span>
                    Profile
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="space-y-2 text-center">
                        <p>Welcome to Netcom</p>
                        <p>Trade International (NTI)</p>
                        <p>Sign Up or Login for a personalised</p>
                        <p>experience and faster checkout!</p>
                    </div>
                    <Card className='py-2 uppercase text-md font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 text-center'>
                        <Link to="/login" className='hover:text-green-600 cursor-pointer'>Sign in</Link>
                        <span>/</span>
                        <Link to="" className='hover:text-green-600 cursor-pointer'>Registion</Link>
                    </Card>
                </HoverCardContent>
            </HoverCard>

        </>
    )
}

export default UserProfile
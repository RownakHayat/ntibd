import React from 'react'
import Marquee from 'react-fast-marquee'
import { Input } from '../../common/input'

const Navbar = () => {
    return (
        <>
            <div className="header">
                <div className="top_header mx-16">
                    <div className="grid grid-rows-2">
                        <div className="grid grid-cols-12">
                            <div className="col-span-8">
                                <Marquee>
                                    <p>I can be a React component, multiple React components, or just some text.</p>
                                    <p>I can be a React component, multiple React components, or just some text.</p>
                                    <p>I can be a React component, multiple React components, or just some text.</p>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav_header mx-16">
                    <div className="grid grid-rows-3">
                        <div className="grid grid-cols-12">
                            <div className="col-span-4">
                                <img src="/assest/image/nti-logo.png" alt="" />
                            </div>
                            <div className="col-span-4">
                            <Input />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
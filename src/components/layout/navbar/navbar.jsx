import React from 'react'
import Marquee from 'react-fast-marquee'
import SearchComponent from '../../common/SearchComponets/SearchComponents'
import { Heart, ShoppingCart, UserRound } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { RiPinterestFill } from "react-icons/ri";
import NavHeader from '../../common/NavHeader/NavHeader';
import UserProfile from '../../common/UserProfile/userProfile';

const Navbar = () => {
    return (
        <>
            <div className="header bg-white fixed">
                <div className="top_header mx-20 my-2">
                    <div className="grid grid-rows-1 grid-cols-12">
                        <div className="col-span-8">
                            <Marquee>
                                <p>I can be a React component, multiple React components, or just some text.</p>
                                <p>I can be a React component, multiple React components, or just some text.</p>
                                <p>I can be a React component, multiple React components, or just some text.</p>
                            </Marquee>
                        </div>
                        <div className="col-span-4">
                            <div className="flex justify-center items-center gap-4 float-right text-xl">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaLinkedinIn />
                                <TfiYoutube />
                                <RiPinterestFill />
                                <FaInstagram />
                            </div>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="nav_header mx-20">
                    <div className="grid grid-rows-1">
                        <div className="grid grid-cols-12">
                            <div className="col-span-4">
                                <div className="flex justify-center text-center">
                                    <img src="/assest/image/nti-logo.png" alt="" className='w-1/4' />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <SearchComponent />
                            </div>
                            <div className="col-span-2">
                                <div className="flex justify-around mt-2">
                                    <span className=''>
                                        
                                        <UserProfile />
                                    </span>
                                    <span>
                                        <Heart />
                                        Wishlist
                                    </span>
                                    <span>
                                        <ShoppingCart />
                                        Cart
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavHeader />
                </div>

            </div>
        </>
    )
}

export default Navbar
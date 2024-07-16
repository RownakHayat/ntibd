import React from 'react'
import Marquee from 'react-fast-marquee'
import SearchComponent from '../../common/SearchComponets/SearchComponents'
import { Heart, ShoppingCart } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { RiPinterestFill } from "react-icons/ri";
import UserProfile from '../../common/UserProfile/userProfile';
import Dropdown from '../../common/DropdownMenu/DropdownMenu';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../../common/ui/navigationMenu';

const Navbar = () => {
    return (
            <div className="header bg-white">
                <div className="top_header my-2">
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
                <div className="nav_header">
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
                    {/* <NavHeader /> */}
                    <div className="grid grid-rows-1 grid-cols-12">
                        <div className="col-span-4">
                            <div className="flex justify-center items-center">
                                <Dropdown />
                            </div>
                        </div>
                        <div className="col-span-6">
                            <NavigationMenu>
                                <NavigationMenuList className="gap-4">
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className="hover:text-green-600 cursor-pointer"><Link to='/'>Home</Link> </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className="hover:text-green-600 cursor-pointer"><Link to='/propitor'>Proprietor</Link></NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className="hover:text-green-600 cursor-pointer"><Link to='/about-us'>About Us</Link></NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className="hover:text-green-600 cursor-pointer"> <Link to="/shop">Shop</Link></NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className="hover:text-green-600 cursor-pointer"><Link to="/managment">Management</Link> </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className="hover:text-green-600 cursor-pointer" ><Link to="/blog">Blog</Link></NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className="hover:text-green-600 cursor-pointer"><Link to="/contact">Contact</Link></NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
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
                </div>

            </div>
    )
}

export default Navbar
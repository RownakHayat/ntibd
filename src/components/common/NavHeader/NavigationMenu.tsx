"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigationMenu";

const Navigationbar = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink className="hover:text-green-600 cursor-pointer" href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="hover:text-green-600 cursor-pointer" href="/proprietor">Proprietor</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="hover:text-green-600 cursor-pointer" href="about-us">About Us</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
           <NavigationMenuLink className="hover:text-green-600 cursor-pointer" href="/shop"> Shop</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="hover:text-green-600 cursor-pointer" href="/managment">Management</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="hover:text-green-600 cursor-pointer" href="/blog">Blog</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="hover:text-green-600 cursor-pointer" href="/contact">Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navigationbar;

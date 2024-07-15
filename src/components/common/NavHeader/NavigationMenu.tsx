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
          <NavigationMenuItem className="hover:text-green-600 cursor-pointer">
            Home
          </NavigationMenuItem>
          <NavigationMenuItem className=" cursor-pointer">
            Proprietor
          </NavigationMenuItem>
          <NavigationMenuItem className=" cursor-pointer">
            About Us
          </NavigationMenuItem>
          <NavigationMenuItem className=" cursor-pointer">
            Shop
          </NavigationMenuItem>
          <NavigationMenuItem className=" cursor-pointer">
            Management
          </NavigationMenuItem>
          <NavigationMenuItem className=" cursor-pointer">
            Blog
          </NavigationMenuItem>
          <NavigationMenuItem className=" cursor-pointer">
            Contact
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navigationbar;

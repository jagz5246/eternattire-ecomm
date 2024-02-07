"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { ShoppingBagIcon } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';

const Navbar = () => {
    const links = [
        {name: 'Home', href: '/'},
        {name: 'Men', href: '/Men'},
        {name: 'Women', href: '/Women'},
        {name: 'Teens', href: '/Teens'},

    ];
    const path = usePathname()
    const {handleCartClick} = useShoppingCart()
  return (
    <header className="mb-8 border-b">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
            <Link href="/">
                <h1 className='text-xl md:text-4xl font-bold'>Etern
                <span className="text-primary">Attire</span></h1>
            </Link>

            <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
                {links.map((link,id)=>(
                    <div key={id}>
                        {path === link.href ? (
                            <Link className="text-lg font-semibold text-primary" href={link.href}>{link.name}</Link>
                        ):(
                            <Link className="text-lg dfont font-semibold text-gray-600 transition duration-200 hover:text-primary" href={link.href}>{link.name}</Link>
                        )}
                    </div>
                ))}
            </nav>
            <div className='flex divide-x border-r sm:border-l'>
            <Button onClick={()=>handleCartClick()} variant={"outline"} className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 md:h-24 md:w-24 rounded-none'>
                <ShoppingBagIcon />
                <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
            </Button>
            </div>
        </div>
    </header>
  )  
}

export default Navbar

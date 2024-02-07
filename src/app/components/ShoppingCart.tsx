"use client"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import { Delete } from "lucide-react"
import Image from "next/image"
import React from 'react'
import { useShoppingCart } from "use-shopping-cart"

const ShoppingCart = () => {
    const { cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, clearCart, totalPrice, redirectToCheckout } = useShoppingCart()

    const handleCheckout = async(event: any) =>{
        event.preventDefault();
        try {
            const result = await redirectToCheckout()
            console.log(result)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}>
          <SheetContent className="sm:max-w-lg w-[90vw]">
            <SheetHeader>
              <SheetTitle>Shopping Cart</SheetTitle>
            </SheetHeader>
            <div className="h-full flex flex-col justify-between">
                <div className="mt-8 flex-1 overflow-y-auto">
                    <ul className="-my-6 divide-y divide-gray-200">
                    {cartCount === 0 ? (<h1 className="text-xl py-6">Looks like your cart is empty!</h1>) : (
                        //<h1 className="text-4xl py-6">Items are added</h1>
                        <>
                        {Object.values(cartDetails??{}).map((entry, index)=>(
                            <li className='flex py-6' key={index}>
                                <div className="h-24 w-24 mx-4 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <Image src={entry.image as string}
                                    priority
                                    alt="product_image"
                                    width={100}
                                    height={100}/>
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                            {entry.description}
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                        ))}
                        </>
                    )}
                    </ul>
                </div>
                
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal: </p>
                        {cartCount === 0 ? (<p>0.00</p>) : (<p>Rs.{totalPrice}</p>)}
                    </div>
                    <p className="mt0.5 text-sm text-gray-500">Shipping and taxes are calculated at checkout</p>
                    <div className="mt-6 ">
                        <Button onClick={handleCheckout} className="w-full">Checkout</Button>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-gray-500"><p>
                    Or{" "}
                    <button onClick={()=>handleCartClick()} className="font-medium text-primary hover:text-primary/80">continue shopping</button></p></div>
                </div>

            </div>
          </SheetContent>
        </Sheet>
      )
}

export default ShoppingCart
  
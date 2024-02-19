"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { ProductCart } from './AddToBag'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity';
import { redirect } from 'next/navigation';


const BuyNow = ({name, description, price, currency, image, price_id}: ProductCart) => {
  const {addItem, cartDetails} = useShoppingCart()
  const {push} = useRouter()

  const buyNow = (price_id: string) =>{
    addItem(product)
    push("https://eternattire-ecomm.vercel.app/pages/CheckoutPage")
  }

    const product={
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
    }
  return (
   <Button onClick={()=>buyNow(product.price_id)} className='cursor-pointer bg-secondary text-gray-900 hover:text-white'>Buy Now</Button>
  )
}

export default BuyNow

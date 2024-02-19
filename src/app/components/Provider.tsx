"use client"
import React, { ReactNode } from 'react'
import { CartProvider as USCProvider} from 'use-shopping-cart'

const Provider = ({children}: {children: ReactNode}) => {
  return (
    <USCProvider
    mode='payment'
    cartMode='client-only'
    stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
    // successUrl='http://localhost:3000/stripe/success'
    // cancelUrl='http://localhost:3000/stripe/error'
    successUrl='https://eternattire-ecomm.vercel.app/stripe/success'
    cancelUrl='https://eternattire-ecomm.vercel.app/stripe/error'

    billingAddressCollection={true}
    currency='INR'
    language='en-US'
    shouldPersist={true}>
      {children}
    </USCProvider>
  )
}

export default Provider

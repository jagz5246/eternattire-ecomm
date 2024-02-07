"use client"
import React, { ReactNode } from 'react'
import { CartProvider as USCProvider} from 'use-shopping-cart'

const Provider = ({children}: {children: ReactNode}) => {
  return (
    <USCProvider
    mode='payment'
    cartMode='client-only'
    stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
    successUrl='http://localhost:3000/stripe/success'
    cancelUrl='http://localhost:3000/stripe/error'
    // successUrl={`${window.location.origin} +"/success"`}
    // cancelUrl={`${window.location.origin} +"/error"`}
    billingAddressCollection={false}
    currency='INR'
    language='en-US'
    shouldPersist={true}>
      {children}
    </USCProvider>
  )
}

export default Provider

"use client"
import React from 'react'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'
import { Button } from '@/components/ui/button'

const page = () => {
    const { cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, clearCart, totalPrice, redirectToCheckout } = useShoppingCart()

    const handleCheckout = async(event: any) =>{
      // event.preventDefault();
      try {
          const result = await redirectToCheckout()
          console.log(result)
          
      } catch (error) {
          console.log(error)
      }
  }
  {console.log(cartDetails)}


  return (
    <>
      <h1 className='text-center text-3xl font-bold mb-12'><span className='text-red-600'>Shipping</span> details</h1>

      <form action={handleCheckout} className=' lg:ml-10 lg:flex gap-4'>

        {/* display cart items */}
        <div className=' lg:w-1/2 mb-24 lg:mb-2'>
          <ul className='bg-gray-500/10 px-5 py-5 '>
            <>
            {Object.values(cartDetails??{}).map((entry, index)=>(
                  <li className='flex items-center py-6' key={index}>

                  <div className="h-12 w-12 mx-4 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image src={entry.image as string}
                      priority
                      alt="product_image"
                      width={50}
                      height={50}/>
                  </div>
                  <div className='flex-col gap-2'>
                      <h2 className='text-sm'>{entry.name} </h2>
                      <h3 className='text-xs text-gray-500'> Rs. {entry.price} <span className='text-sm'>x {entry.quantity}</span></h3> 
                  </div>

                  </li>
            ))}
            </>
            <Button type='submit' className="w-2/3 cursor-pointer text-center ml-[18%]">Checkout</Button>
          </ul>
        </div>


        {/* Shipping details */}
        <div className=' w-full ml-6'>
        <div className='sm:flex sm:gap-12 mb-4'>
         <div className='text-md'>
            <label htmlFor="firstName">First Name: </label><br />
            <input className=' outline outline-gray-900/10 mt-2 w-2/3 sm:w-full px-2 py-4 rounded mb-4 focus:outline-red-600' type="text" name="firstName" id="firstName" placeholder='First name'required/>
            </div>
            <div className='text-md'>
            <label htmlFor="lastName">Last Name: </label><br />
            <input className=' outline outline-gray-900/10 mt-2 w-2/3 sm:w-full px-2 py-4 rounded mb-4 focus:outline-red-600' type="text" name="lastName" id="lastName" placeholder='Last name'required/>
            </div>  
        </div>
            <div className='flex-col mb-4'>
            <label className='text-md' htmlFor="country">Country: </label><br />
            <select name="country" className='outline outline-gray-900/10 rounded px-2 py-4 my-2' id="country">
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="Singapore">Singapore</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Vietnam">Vietnam</option>
            </select>
            </div>
            <div className='mb-4'>
            <label className='text-md' htmlFor="addressL1">Address Line 1: </label><br />
            <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type='text' name="addressL1" id="addressL1" placeholder='Address Line 1...'/>
            </div>
            <div className='mb-4'>
            <label className='text-md' htmlFor="addressL2">Address Line 2: </label><br />
            <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type='text' name="addressL2" id="addressL2" placeholder='Address Line 2...'/>
            </div>
            <div className='mb-4'>
            <label className='text-md' htmlFor="city">Town/City: </label><br />
            <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type="text" name="town" id="town" placeholder='Town/City' required/>
            </div>
            <div className='mb-4'>
            <label className='text-md' htmlFor="State">State: </label><br />
                  <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type="text" name="state" id="state" placeholder='State' required/>
            </div>
            <div className='mb-4'>
            <label className='text-md' htmlFor="zipcode">Postcode/ZIP: </label><br />
            <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type="number" name="zipcode" id="zipcode" placeholder='Postcode/ZIP' required/>
            </div>
            <div className='mb-4'>
            <label className='text-md' htmlFor="phone">Phone: </label><br />
            <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600'
            type="number" name="phone" id="phone" placeholder='phone no' required/>
            </div>
            <div className='mb-4'>
            <label className='text-md' htmlFor="email">Email: </label><br />
            <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type="email" name="email" id="email" placeholder='email' required/>
            </div>
        </div>

      </form>
  </>
  )
}

export default page



{/* <div className='flex gap-4'>

<form action="#" className='px-10 py-10 w-2/3'>
  <div className='sm:flex sm:gap-12 mb-4'>
    <div className='text-md'>
    <label htmlFor="firstName">First Name: </label><br />
    <input className=' outline outline-gray-900/10 mt-2 w-2/3 sm:w-full px-2 py-4 rounded mb-4 focus:outline-red-600' type="text" name="firstName" id="firstName" placeholder='First name'required/>
    </div>
    <div className='text-md'>
    <label htmlFor="lastName">Last Name: </label><br />
    <input className=' outline outline-gray-900/10 mt-2 w-2/3 sm:w-full px-2 py-4 rounded mb-4 focus:outline-red-600' type="text" name="lastName" id="lastName" placeholder='Last name'required/>
    </div>
  </div>
  <div className='flex-col mb-4'>
  <label className='text-md' htmlFor="country">Country: </label><br />
  <select name="country" className='outline outline-gray-900/10 rounded px-2 py-4 my-2' id="country">
    <option value="India">India</option>
    <option value="Australia">Australia</option>
    <option value="Singapore">Singapore</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Vietnam">Vietnam</option>
  </select>
  </div>
  <div className='mb-4'>
  <label className='text-md' htmlFor="addressL1">Address Line 1: </label><br />
  <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type='text' name="addressL1" id="addressL1" placeholder='Address Line 1...'/>
  </div>
  <div className='mb-4'>
  <label className='text-md' htmlFor="addressL2">Address Line 2: </label><br />
  <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type='text' name="addressL2" id="addressL2" placeholder='Address Line 2...'/>
  </div>
  <div className='mb-4'>
  <label className='text-md' htmlFor="city">Town/City: </label><br />
  <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type="text" name="town" id="town" placeholder='Town/City' required/>
  </div>
  <div className='mb-4'>
  <label className='text-md' htmlFor="State">State: </label><br />
        <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type="text" name="state" id="state" placeholder='State' required/>
  </div>
  <div className='mb-4'>
  <label className='text-md' htmlFor="zipcode">Postcode/ZIP: </label><br />
  <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type="number" name="zipcode" id="zipcode" placeholder='Postcode/ZIP' required/>
  </div>
  <div className='mb-4'>
  <label className='text-md' htmlFor="phone">Phone: </label><br />
  <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type="number" name="phone" id="phone" placeholder='phone no' required/>
  </div>
  <div className='mb-4'>
  <label className='text-md' htmlFor="email">Email: </label><br />
  <input className=' outline outline-gray-900/10 mt-2 w-2/3 px-2 py-4 rounded mb-4 focus:outline-red-600' type="email" name="email" id="email" placeholder='email' required/>
  </div>
  {/* <button className='bg-red-500 px-4 py-4 text-md text-white border rounded-md transition duration-150 hover:text-white hover:bg-gray-900' type="submit">Checkout</button> */}
// </form> 

{/* <div className=' bg-gray-500/10 px-10 py-5 mx-4 w-1/3'>
<h2 className='text-md font-bold'>Order details:</h2>
<ul>
  <>
    {Object.values(cartDetails??{}).map((entry, index)=>(
        <li className='flex items-center py-6' key={index}>
        <div className="mx-4 flex-shrink-0 overflow-hidden">
            <Image src={entry.image as string}
            priority
            alt="product_image"
            width={50}
            height={50}/>
        </div>
        <div className="ml-4 flex flex-1 flex-col">
        <div>
        <div className="flex text-xs justify-between font-medium text-gray-900">
          <h3 >{entry.name}</h3>
          <p className="ml-4">${entry.price}</p>
        </div>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">
            {entry.description}
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">QTY: {entry.quantity}</p>
        </div>
        </div>
      </li>
    ))}
  </>
</ul>
<Button onClick={handleCheckout} className="w-full">Checkout</Button>
</div>
</div> */}
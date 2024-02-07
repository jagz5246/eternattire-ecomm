import { Button } from '@/components/ui/button'
import { CheckCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div className='h-screen'>
        <div className="mt-32 md:max-w-[50vw] mx-auto">
            <CheckCheck className='text-green-600 w-16 h-16 mx-auto my-6'/>
            <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment successful!</h3>
                <p className="text-gray-600 text-center my-4">
                Thank you for your purchase. Hope you enjoyed shopping with us.
            </p>
            <p>Have a great day!</p>
            <Button >
                <Link href='/'>Go home</Link>
            </Button>
            </div>

          
        </div>
      
    </div>
  )
}

export default page

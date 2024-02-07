"use client";
import React,{useState} from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/sanity'

interface iAppProps{
    images: any
}

const ImageGallery = ({images}:iAppProps) => {
    const [bigImage, setImage] = useState(images[0])
    const handleImage=(image: any)=>{
        setImage(image)
    }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
            {images.map((image:any,index:any)=>(
                <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
                    <Image 
                    className='h-full w-full object-cover object-center cursor-pointer'
                    alt='product image'
                    src={urlFor(image).url()}
                    width={200}
                    height={200} 
                    onClick={()=> handleImage(image)}
                    />
                </div>
            ))}
        </div>

        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
            <Image className='h-full w-full object-cover object-center'
            width={500}
            height={500}
            src={urlFor(bigImage).url()}
            alt='big image'
            />
            <span className="bg-red-500 absolute left-0 top-0 rounded-br-lg px-3 py-1.5 text-sm uppercase tracking-wider text-white">Sale</span>
        </div>
    </div>
  )
}

export default ImageGallery

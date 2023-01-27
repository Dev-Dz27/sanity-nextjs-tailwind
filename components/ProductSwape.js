import React from 'react'
import { urlFor } from '../lib/client'
import Link from 'next/link'
import Image from 'next/image';

const ProductSwape = ({product}) => {
  const { images, name, details, price } = product;
  console.log(product)
  return (
    <>
        
        <Link href={`/product/${product.slug.current}`} class="block overflow-hidden group">
          <div
            class="relative h-[280px] sm:h-[280px] ">

              <img
              src={urlFor(images[0])}    
              alt="product"
              class=" absolute inset-0 object-cover w-full h-full opacity-100 group-hover:opacity-0 transition"
              />
              <img
              src={urlFor(images[1])}    
              alt="product"
              class="absolute inset-0 object-cover w-full h-full opacity-0 group-hover:opacity-100 transition"              />
            
      


      </div>

  <div class="relative pt-3 bg-white text-center">
    <h3
      class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
    >
      {name}
    </h3>

    <p class="mt-2">
      <span class="sr-only"> {name} </span>

      <span class="tracking-wider text-gray-900"> {price}  </span>
    </p>
  </div>
</Link>



    </>
  )
}

export default ProductSwape
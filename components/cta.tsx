import React from 'react'
import Image from 'next/image'
function Cta() {
  return (
    <div className='relative bg-gray-900'>
      {/* Decorative image and overlay */}
      <div aria-hidden='true' className='absolute inset-0 overflow-hidden'>
        <Image
          width={1920}
          height={1080}
          src='https://images.unsplash.com/photo-1636525653613-2a3a05c00759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt=''
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-gray-900 opacity-50'
      />

      <div className='relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white lg:text-6xl'>
          New arrivals are here
        </h1>
        <p className='mt-4 text-xl text-white'>
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while theyre still in
          stock.
        </p>
        <a
          href='#'
          className='mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-tangora-10 hover:bg-gray-100'
        >
          Shop New Arrivals
        </a>
      </div>
    </div>
  )
}

export default Cta

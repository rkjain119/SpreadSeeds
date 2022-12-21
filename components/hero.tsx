/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
function Hero() {
  return (
    <>
      {/* Hero section */}
      <main className='lg:relative'>
        <div className='mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 sm:px-8 lg:w-1/2 xl:pr-16'>
            <h1 className='text-4xl font-extrabold tracking-tight text-tangora-10 dark:text-offwhite-10 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <div className=''>
                <span className=' text-tangora-10 dark:text-offwhite-10 xl:inline'>
                  Think
                </span>
                <span className='text-green-600  xl:inline'> Green </span>
              </div>
              <span className=' text-tangora-10 dark:text-offwhite-10 xl:inline'>
                & Plant
              </span>
              <span className='text-green-600  xl:inline'> A Plant </span>
            </h1>
            <p className='mx-auto mt-3 max-w-md text-lg text-brown-900 dark:text-offwhite-10 sm:text-xl md:mt-5 md:max-w-3xl'>
              Welcome to our plant paradise! Here you`ll find a wide selection
              of high-quality, locally sourced plants for any occasion.From
              decorative pots and planters to tropical and exotic plants, we
              have something for everyone.
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <Link href='#collection'>
                  <a className='flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-offwhite-10 hover:bg-green-700 dark:text-offwhite-10 md:py-4 md:px-10 md:text-lg'>
                    Explore more
                  </a>
                </Link>
              </div>
              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <Link href='/store'>
                  <a className='flex w-full items-center justify-center rounded-md border border-transparent bg-brown-900 px-8 py-3 text-base font-medium text-offwhite-10 hover:bg-brown-500 dark:bg-offwhite-10 dark:text-green-600 md:py-4 md:px-10 md:text-lg'>
                    Get started
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='relative h-56 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2'>
          <img
            className='absolute inset-0 h-full w-full object-cover sm:hidden'
            src='./bush.png'
            alt='decor bush'
          />
        </div>
      </main>
      <div className='sm:mx-auto sm:max-w-3xl sm:px-6'>
        <div className=' sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <div className='hidden sm:block'>
            <img
              className='w-full rounded-md drop-shadow-2xl md:h-full md:w-auto md:max-w-none '
              src='./pot.png'
              alt='A potted plant'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

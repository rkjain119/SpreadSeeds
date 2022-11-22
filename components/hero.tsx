/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
  ChevronRightIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

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
                <span className=' text-green-600 xl:inline'> Green </span>
              </div>
              <span className=' text-tangora-10 dark:text-offwhite-10 xl:inline'>
                & Plant
              </span>
              <span className=' text-green-600 xl:inline'> A Plant </span>
            </h1>
            <p className='mx-auto mt-3 max-w-md text-lg text-bbrown-20 dark:text-offwhite-10 sm:text-xl md:mt-5 md:max-w-3xl'>
              A plant is the most cliche thing, but a little bit of green has a
              great effect on happiness. Being at a cubicle all day is not
              pleasing, but a little life on your desk can give you a little
              life, too.
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-offwhite-10 hover:bg-green-700 dark:text-offwhite-10 md:py-4 md:px-10 md:text-lg'
                >
                  Get started
                </a>
              </div>
              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-bbrown-20 px-8 py-3 text-base font-medium text-offwhite-10 hover:bg-gray-50 dark:bg-offwhite-10 dark:text-green-600 md:py-4 md:px-10 md:text-lg'
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative h-56 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2'>
          <img
            className='absolute inset-0 h-full w-full object-cover sm:hidden'
            src='./bush.png'
            alt=''
          />
        </div>
      </main>
      <div className='sm:mx-auto sm:max-w-3xl sm:px-6'>
        <div className=' sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <div className='hidden sm:block'>
            <img
              className='w-full rounded-md drop-shadow-2xl md:h-full md:w-auto md:max-w-none '
              src='./pot.png'
              alt=''
            />
          </div>
          <div className='relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12'>
            {/* <img
              src='https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg'
              alt=''
            /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

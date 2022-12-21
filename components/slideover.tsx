import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { useCart } from '../contexts/cart/cart.context'
import Cart from './cart'
import Checkout from './checkout'

export default function Slder() {
  const { state, hideAllHandler } = useCart()

  return (
    <Transition.Root show={state.showCart || state.showCheckout} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-50 overflow-hidden'
        onClose={() => hideAllHandler()}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Dialog.Overlay className='absolute inset-0' />

          <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='pointer-events-auto w-screen max-w-md'>
                <div className='flex h-full flex-col overflow-y-scroll bg-offwhite-10 shadow-xl'>
                  <div className='hidden h-6 xl:block' />
                  <div className='items-center justify-between  bg-green-600 py-[1.13rem] px-5 sm:px-6 md:px-4 xl:py-[1.37rem]'>
                    <div className='flex items-center justify-between'>
                      <Dialog.Title className='text-lg font-medium text-white'>
                        {state.showCart ? 'Cart' : 'Checkout'}
                      </Dialog.Title>
                      <div className='ml-3 flex h-7 items-center'>
                        <button
                          type='button'
                          className='rounded-md bg-green-700 text-green-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                          onClick={() => hideAllHandler()}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='relative flex-1 px-4 py-6 sm:px-6'>
                    {state.showCart && <Cart />}
                    {state.showCheckout && <Checkout />}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

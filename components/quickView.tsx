import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ShieldCheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CheckIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { useCart } from '../contexts/cart/cart.context'

export default function SingleProduct() {
  const {
    state,
    hideAllHandler,
    addItemHandler,
    isInCartHandler,
    cartHandler,
  } = useCart()
  const product = state.product
  const showDetails = state.showDetails

  return (
    <Transition.Root show={showDetails} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-40 mt-16 overflow-y-auto sm:mt-0'
        onClose={() => hideAllHandler()}
      >
        <div
          className='flex min-h-screen text-center md:block md:px-2 lg:px-4'
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 hidden backdrop-blur-[1px]  transition-opacity md:block' />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden md:inline-block md:h-screen md:align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
            enterTo='opacity-100 translate-y-0 md:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 md:scale-100'
            leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
          >
            <div className='flex w-full transform text-left text-base transition md:my-8 md:inline-block md:max-w-2xl md:px-4 md:align-middle lg:max-w-4xl '>
              <div className='relative flex w-full items-center overflow-hidden rounded-lg bg-offwhite-20 px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 '>
                <button
                  type='button'
                  className='absolute top-4 right-4 text-brown-400 hover:text-brown-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8'
                  onClick={() => hideAllHandler()}
                >
                  <span className='sr-only'>Close</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
                <div className='grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8'>
                  <div className='sm:col-span-4 lg:col-span-5'>
                    <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-brown-100'>
                      <img
                        src={product.image}
                        alt={product.name}
                        className='object-cover object-center'
                      />
                    </div>
                    {/* <p className='absolute top-4 left-4 text-center sm:static sm:mt-6'>
                      <a
                        href={product.href}
                        className='font-medium text-green-600 hover:text-green-500'
                      >
                        View full details
                      </a>
                    </p> */}
                  </div>
                  <div className='sm:col-span-8 lg:col-span-7'>
                    <h2 className='text-2xl font-extrabold text-brown-900 sm:pr-12'>
                      {product.name}
                    </h2>
                    <section
                      aria-labelledby='information-heading'
                      className='mt-4'
                    >
                      <div className='flex items-center'>
                        <p className='text-lg text-brown-900 sm:text-xl'>
                          ₹ {product.price}
                        </p>
                        <div className='ml-4 border-l border-brown-300 pl-4'>
                          <div className='flex items-center'>
                            <div className='flex items-center'>
                              {/* {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating
                                      ? 'text-yellow-400'
                                      : 'text-brown-300',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden='true'
                                />
                              ))} */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-6 flex items-center'>
                        <CheckIcon
                          className='h-5 w-5 flex-shrink-0 text-green-500'
                          aria-hidden='true'
                        />
                        <p className='ml-2 font-medium text-brown-500'>
                          In stock and ready to ship
                        </p>
                      </div>
                    </section>
                    <section aria-labelledby='options-heading' className='mt-6'>
                      <h3 id='options-heading' className='sr-only'>
                        Product options
                      </h3>
                      <>
                        <div className='sm:flex sm:justify-between'>
                          <p className='text-sm text-brown-700'>
                            {product.description}
                          </p>
                        </div>
                        {/* <div className='mt-4 flex'>
                          <a
                            href='#'
                            className='group flex text-sm text-brown-500 hover:text-brown-700'
                          >
                            <span>What size should I buy?</span>
                            <QuestionMarkCircleIcon
                              className='ml-2 h-5 w-5 flex-shrink-0 text-brown-400 group-hover:text-brown-500'
                              aria-hidden='true'
                            />
                          </a>
                        </div> */}
                        <div className='mt-6'>
                          {isInCartHandler(product.id) ? (
                            <button
                              type='button'
                              onClick={() => {
                                hideAllHandler()
                                cartHandler(true)
                              }}
                              className='flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 py-3 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-brown-50'
                            >
                              Got To Cart
                            </button>
                          ) : (
                            <button
                              type='button'
                              onClick={() => addItemHandler(product)}
                              className='flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 py-3 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-brown-50'
                            >
                              Add to bag
                            </button>
                          )}
                        </div>
                        <div className='mt-6 text-center'>
                          <a
                            href='#'
                            className='group inline-flex text-base font-medium'
                          >
                            <ShieldCheckIcon
                              className='mr-2 h-6 w-6 flex-shrink-0 text-brown-400 group-hover:text-brown-500'
                              aria-hidden='true'
                            />
                            <span className='text-brown-500 group-hover:text-brown-700'>
                              Quality Asured
                            </span>
                          </a>
                        </div>
                      </>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

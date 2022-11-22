/* This example requires Tailwind CSS v2.0+ */
import {
  Fragment,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react'
import { Dialog, Transition, Popover } from '@headlessui/react'
import {
  TrashIcon,
  ShoppingBagIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import { useCart } from '../contexts/cart/cart.context'

// const products = [
//   {
//     id: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     price: '$90.00',
//     quantity: 1,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt:
//       'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },

export default function Cart() {
  const {
    state,
    cartHandler,
    checkoutHandler,
    clearCartHandler,
    removeItemHandler,
    addItemHandler,
    deleteItemFromCartHandler,
    cartTotal,
  } = useCart()

  // let total = state.items.reduce((price, product) => {
  //   return price + product.price * product.quantity
  // }, 0)
  return state.items.length > 0 ? (
    <div className='pointer-events-auto  max-w-md'>
      <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
        <div className='flex items-start justify-between'>
          <Dialog.Title className='text-lg font-medium text-gray-900'>
            Shopping cart
          </Dialog.Title>
          <div className='ml-3 flex h-7 items-center'>
            <button
              type='button'
              className='-m-2 p-2 text-gray-400 hover:text-gray-500'
              onClick={() => clearCartHandler()}
            >
              <span className='sr-only'>Empty Cart</span>
              <TrashIcon
                title='Empty Cart'
                className='h-5 w-5'
                aria-hidden='true'
              />
            </button>
          </div>
        </div>

        <div className='mt-8'>
          <div className='flow-root'>
            <ul role='list' className='-my-6 divide-y divide-gray-200'>
              {/* {console.log('product', cartItems)} */}
              {state.items.map(
                (product: {
                  quantity: string | number
                  id: Key
                  image: string
                  name: string
                  price: string | number
                  color: string
                }) => (
                  <li key={product.id} className='flex py-6'>
                    <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                      <img
                        src={product.image}
                        alt={product.name}
                        className='h-full w-full object-cover object-center'
                      />
                    </div>

                    <div className='ml-4 flex flex-1 flex-col'>
                      <div>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                          <h3>{product.name}</h3>
                          <p className='ml-4'>
                            {' '}
                            {(+product.price * +product.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className='mt-1 text-sm text-gray-500'>
                          {product.color}
                        </p>
                      </div>
                      <div className='flex flex-1 items-end justify-between text-sm'>
                        {/* <p className='text-gray-500'>Qty {product.quantity}</p> */}
                        <button
                          type='button'
                          className='text-sm font-medium text-green-600 hover:text-green-500 sm:ml-0 sm:mt-2'
                          onClick={() => deleteItemFromCartHandler(product)}
                        >
                          <span>Remove</span>
                        </button>
                        <span className='relative z-0 inline-flex rounded-md shadow-sm'>
                          <button
                            onClick={() => removeItemHandler(product)}
                            type='button'
                            className='relative inline-flex items-center rounded-l-md  border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500'
                          >
                            <span className='sr-only'>Previous</span>
                            <MinusIcon className='h-5 w-5' aria-hidden='true' />
                          </button>
                          <span className=' inline-flex items-center  border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500'>
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => addItemHandler(product)}
                            type='button'
                            className='relative -ml-px inline-flex items-center rounded-r-md  border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500'
                          >
                            <span className='sr-only'>Next</span>
                            <PlusIcon className='h-5 w-5' aria-hidden='true' />
                          </button>
                        </span>
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
        <div className='flex justify-between text-base font-medium text-gray-900'>
          <p>Total</p>
          <p>₹ {cartTotal}</p>
        </div>
        <p className='mt-0.5 text-sm text-gray-500'>
          Shipping calculated at checkout.
        </p>
        <div className='mt-6'>
          <a
            onClick={() => {
              checkoutHandler(true)
              cartHandler(false)
            }}
            className='flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700'
          >
            Checkout
          </a>
        </div>
        <div className='mt-6  justify-center text-center text-sm text-gray-500'>
          <p>or</p>
          <button
            type='button'
            className='font-medium text-green-600 hover:text-green-500'
            onClick={() => cartHandler(false)}
          >
            Continue Shopping
            <span aria-hidden='true'> &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className='mt-6  justify-center text-center text-sm text-gray-500'>
      <h3 className='p-6 text-lg font-medium text-gray-900'>
        Your cart is empty
      </h3>
      <button
        type='button'
        className='font-medium text-green-600 hover:text-green-500'
        onClick={() => cartHandler(false)}
      >
        Continue Shopping
        <span aria-hidden='true'> &rarr;</span>
      </button>
    </div>
  )
}

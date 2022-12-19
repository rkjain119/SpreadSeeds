import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

import { classNames } from '../utils'
import { useCart } from '../contexts/cart/cart.context'

const paymentMethods = [
  {
    id: 'card',
    title: 'Credit Card',
  },
  { id: 'cash', title: 'Pay-On-Delivery' },
]

export default function Checkout() {
  const { cartHandler, checkoutHandler, clearCartHandler, state } = useCart()
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[1])
  const [success, setSuccess] = useState(false)

  interface formDataType {
    [key: string]: FormDataEntryValue
  }
  const responseBody: formDataType = {}
  // TODO: form validation
  const inputChangeHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget as HTMLFormElement)
    responseBody['cart'] = state.items
    formData.forEach((value, key) => {
      responseBody[key] = value
    })
    const response = await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(responseBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
    if (data.status === 'success') {
      setSuccess(true)
      clearCartHandler()
    }
    console.log(responseBody, success)
  }

  return (
    <main className='mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:max-w-none'>
        <button
          type='button'
          className='font-medium text-green-600 hover:text-green-500'
          onClick={() => {
            checkoutHandler(false)
            cartHandler(true)
          }}
        >
          <span aria-hidden='true'> &larr; </span>
          Go to cart
        </button>
        <h1 className='sr-only'>Checkout</h1>

        <form
          method='POST'
          className='mt-10 sm:flex sm:flex-col'
          onSubmit={inputChangeHandler}
        >
          <div>
            <h2 className='text-lg font-medium text-brown-900'>
              Contact information
            </h2>

            <div className='mt-4'>
              <label
                htmlFor='Email'
                className='block text-sm font-medium text-brown-700'
              >
                Email address
              </label>
              <div className='mt-1'>
                <input
                  type='email'
                  id='Email'
                  name='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                />
              </div>
            </div>
            <div className='mt-4 sm:col-span-2'>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-brown-700'
              >
                Phone
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  autoComplete='tel'
                  className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                />
              </div>
            </div>
          </div>
          {/* shipping */}
          <div className='mt-10 border-t border-brown-200 pt-10'>
            <h2 className='text-lg font-medium text-brown-900'>
              Shipping information
            </h2>

            <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-brown-700'
                >
                  First name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-brown-700'
                >
                  Last name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    autoComplete='family-name'
                    className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium text-brown-700'
                >
                  Address
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    autoComplete='street-address'
                    className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='apartment'
                  className='block text-sm font-medium text-brown-700'
                >
                  Apartment, suite, etc.
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='apartment'
                    id='apartment'
                    className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium text-brown-700'
                >
                  City
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='city'
                    id='city'
                    autoComplete='address-level2'
                    className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-brown-700'
                >
                  Country
                </label>
                <div className='mt-1'>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country-name'
                    className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                  >
                    <option>India</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor='state'
                  className='block text-sm font-medium text-brown-700'
                >
                  State
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='state'
                    id='state'
                    autoComplete='address-level1'
                    className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='zip'
                  className='block text-sm font-medium text-brown-700'
                >
                  Zip code
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='zip'
                    id='zip'
                    autoComplete='postal-code'
                    className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className='mt-10 border-t border-brown-200 pt-10'>
            <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
              <RadioGroup.Label className='text-lg font-medium text-brown-900'>
                Payment method
              </RadioGroup.Label>

              <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                {paymentMethods.map((paymentMethod) => (
                  <RadioGroup.Option
                    key={paymentMethod.id}
                    value={paymentMethod}
                    className={({ checked, active }) =>
                      classNames(
                        checked ? 'border-transparent' : 'border-brown-300',
                        active ? 'ring-2 ring-green-500' : '',
                        'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                      )
                    }
                  >
                    {({ checked, active }) => (
                      <>
                        <div className='flex flex-1'>
                          <div className='flex flex-col'>
                            <RadioGroup.Label
                              as='span'
                              className='block text-sm font-medium text-brown-900'
                            >
                              {paymentMethod.title}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        <div
                          className={classNames(
                            active ? 'border' : 'border-2',
                            checked ? 'border-green-500' : 'border-transparent',
                            'pointer-events-none absolute -inset-px rounded-lg'
                          )}
                          aria-hidden='true'
                        />
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
            {paymentMethod.id === 'card' ? (
              <div className='mt-6 grid grid-cols-4 gap-y-6 gap-x-4'>
                <div className='col-span-4'>
                  <label
                    htmlFor='card-number'
                    className='block text-sm font-medium text-brown-700'
                  >
                    Card number
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='card-number'
                      name='card-number'
                      autoComplete='cc-number'
                      className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='col-span-4'>
                  <label
                    htmlFor='name-on-card'
                    className='block text-sm font-medium text-brown-700'
                  >
                    Name on card
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='name-on-card'
                      name='name-on-card'
                      autoComplete='cc-name'
                      className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='col-span-3'>
                  <label
                    htmlFor='expiration-date'
                    className='block text-sm font-medium text-brown-700'
                  >
                    Expiration date (MM/YY)
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='expiration-date'
                      id='expiration-date'
                      autoComplete='cc-exp'
                      className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='cvc'
                    className='block text-sm font-medium text-brown-700'
                  >
                    CVC
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='cvc'
                      id='cvc'
                      autoComplete='csc'
                      className='block w-full rounded-md border-brown-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className='mt-10 border-t border-brown-200 pt-10'>
            <button
              type='submit'
              className='flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
            >
              {paymentMethod.id === 'cash' ? 'Place order' : 'Pay'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

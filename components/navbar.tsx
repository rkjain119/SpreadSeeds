/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Logo } from './icons'
import { classNames } from '../utils'
import DarkMode from './darkModeToggle'
import { useCart } from '../contexts/cart/cart.context'
import { categories, collections } from './data'
// import Search from './search'

const navigation = {
  categories: [
    {
      name: 'Categories',
      featured: categories,
    },
    {
      name: 'Collections',
      featured: collections,
    },
  ],
  pages: [{ name: 'Store', href: '/store' }],
}

export default function Navbar() {
  const { cartHandler, getItemsCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    // lg
    <nav className='xl:pt-6'>
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-30 flex lg:hidden'
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
              <div className='flex px-4 pt-5 pb-2'>
                <button
                  type='button'
                  className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as='div' className='mt-2'>
                <div className='border-b border-gray-200'>
                  <Tab.List className='-mb-px flex space-x-8 px-4'>
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'border-green-600 text-green-600'
                              : 'border-transparent text-tangora-10',
                            'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className='space-y-12 px-4 py-6'
                    >
                      <div className='grid grid-cols-2 gap-x-4 gap-y-10'>
                        {category.featured.map((item) => (
                          <div key={item.name} className='group relative'>
                            <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75'>
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className='object-cover object-center'
                              />
                            </div>
                            <a
                              href={item.href}
                              className='mt-6 block text-sm font-medium text-tangora-10'
                            >
                              <span
                                className='absolute inset-0 z-10'
                                aria-hidden='true'
                              />
                              {item.name}
                            </a>
                            <p
                              aria-hidden='true'
                              className='mt-1 text-sm text-gray-500'
                            >
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className='space-y-6 border-t border-gray-200 py-6 px-4'>
                {navigation.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <a
                      href={page.href}
                      className='-m-2 block p-2 font-medium text-tangora-10'
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              {/* <div className='space-y-6 border-t border-gray-200 py-6 px-4'>
								<div className='flow-root'>
									<a
										href='#'
										className='-m-2 block p-2 font-medium text-tangora-10'
									>
										Create an account
									</a>
								</div>
								<div className='flow-root'>
									<a
										href='#'
										className='-m-2 block p-2 font-medium text-tangora-10'
									>
										Sign in
									</a>
								</div>
							</div> */}

              <div className='space-y-6 border-t border-gray-200 py-6 px-4'></div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      {/* Navigation */}
      <header className='relative z-40 '>
        <nav aria-label='Top'>
          {/* Secondary navigation */}
          <div className='z-10 mx-auto max-w-7xl rounded-b bg-green-600 px-4 text-brown-900 backdrop-blur-3xl  dark:bg-tangora-10 dark:text-offwhite-10 sm:px-6 md:rounded-lg lg:px-8'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:py-1'>
              <div>
                <div className='flex h-16 items-center justify-between'>
                  {/* Logo (lg+) */}
                  <Link href='/'>
                    <div className='hidden cursor-pointer lg:flex lg:flex-1 lg:items-center'>
                      <span className='sr-only'>SpreadSeeds</span>
                      <Logo className='h-14 w-auto' />
                      <span className='ml-3 text-lg font-medium'>
                        SpreadSeeds
                      </span>
                    </div>
                  </Link>

                  <div className='hidden h-full lg:flex'>
                    {/* Flyout menus */}
                    <Popover.Group className='inset-x-0 bottom-0 px-4'>
                      <div className='flex h-full justify-center space-x-8 '>
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className='flex'>
                            {({ open }) => (
                              <>
                                <div className='relative flex'>
                                  <Popover.Button className='relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out hover:text-brown-600'>
                                    {category.name}
                                    <span
                                      className={classNames(
                                        open ? 'bg-white' : '',
                                        'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out'
                                      )}
                                      aria-hidden='true'
                                    />
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter='transition ease-out duration-200'
                                  enterFrom='opacity-0'
                                  enterTo='opacity-100'
                                  leave='transition ease-in duration-150'
                                  leaveFrom='opacity-100'
                                  leaveTo='opacity-0'
                                >
                                  <Popover.Panel className='absolute inset-x-0 top-full text-sm text-gray-500'>
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className='absolute inset-0 top-1/2 shadow'
                                      aria-hidden='true'
                                    />

                                    <div className='relative bg-offwhite-10'>
                                      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                                        <div className='grid grid-cols-3 gap-y-10 gap-x-8 py-16'>
                                          {category.featured.map((item) => (
                                            <div
                                              key={item.name}
                                              className='group relative'
                                            >
                                              <div className='aspect-w-2 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75'>
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className='object-cover object-center'
                                                />
                                              </div>
                                              <a
                                                href={item.href}
                                                className='mt-4 block font-medium text-tangora-10'
                                              >
                                                <span
                                                  className='absolute inset-0 z-10'
                                                  aria-hidden='true'
                                                />
                                                {item.name}
                                              </a>
                                              <p
                                                aria-hidden='true'
                                                className='mt-1'
                                              >
                                                Shop now
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className='flex items-center text-sm font-medium   hover:text-brown-600'
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) sm only*/}
                  <div className='flex flex-1 items-center lg:hidden'>
                    <button
                      type='button'
                      className='-ml-2 p-2 '
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className='sr-only'>Open menu</span>
                      <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    {/* Search */}
                    {/* <Search /> */}
                    {/* <a
                      onClick={() => setOpen(true)}
                      href='#'
                      className='ml-2 p-2 '
                    >
                      <span className='sr-only'>Search</span>
                      <MagnifyingGlassIcon
                        className='h-6 w-6'
                        aria-hidden='true'
                      />
                    </a> */}
                  </div>

                  {/* Logo (lg hidden) */}
                  <a href='#' className='lg:hidden'>
                    <span className='sr-only'>todo</span>
                    <Logo className='h-14 w-auto' />
                  </a>

                  <div className='flex flex-1 items-center justify-end'>
                    {/* <a
                      href='#'
                      className='hidden text-sm font-medium  lg:block'
                    >
                      Search
                    </a> */}
                    {/* <Search open={open} setOpen={setOpen} />
                    <a
                      onClick={() => setOpen(true)}
                      href='#'
                      className='ml-2 hidden p-2 text-sm font-medium lg:block'
                    >
                      <span className='sr-only'>Search</span>
                      <MagnifyingGlassIcon
                        className='h-6 w-6'
                        aria-hidden='true'
                      />
                    </a> */}

                    <div className='flex items-center lg:ml-8'>
                      {/* Darkmode toggle */}
                      <DarkMode />

                      {/* cart */}
                      <div className='ml-4 flow-root lg:ml-6'>
                        <button
                          onClick={() => cartHandler(true)}
                          className='group -m-2 flex items-center p-2 hover:text-brown-600'
                        >
                          <ShoppingCartIcon
                            className='h-6 w-6 flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='0 group- ml-2 text-sm font-medium '>
                            {getItemsCount}
                          </span>
                          <span className='sr-only'>items in cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </nav>
  )
}

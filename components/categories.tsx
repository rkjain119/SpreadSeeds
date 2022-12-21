import React from 'react'

import { collections } from './data'

function Categories() {
  return (
    <>
      <main className='bg-offwhite-10 dark:bg-tangora-10 '>
        {/* Collection section */}
        <section
          aria-labelledby='collection-heading'
          className='mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8'
        >
          <h2
            id='collection-heading'
            className='text-2xl font-extrabold tracking-tight '
          >
            Shop by Collection
          </h2>
          <p className='mt-4 text-base text-gray-500'>
            Shop our wide selection of high-quality, locally sourced plants for
            any occasion
          </p>
          <div className='mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0'>
            {collections.map((collection) => (
              <a
                key={collection.name}
                href={collection.href}
                className='group block'
              >
                <div
                  aria-hidden='true'
                  className='aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6'
                >
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <h3 className='mt-4 text-base font-semibold '>
                  {collection.name}
                </h3>
                <p className='mt-2 text-sm text-gray-500 '>
                  {collection.description}
                </p>
              </a>
            ))}
          </div>
        </section>
        {/* callout collection */}
        {/* <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
            <h2 className='text-2xl font-extrabold text-gray-900'>
              Collections
            </h2>
            <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
              {callouts.map((callout) => (
                <div key={callout.name} className='group relative'>
                  <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                  <h3 className='mt-6 text-sm text-gray-500'>
                    <a href={callout.href}>
                      <span className='absolute inset-0' />
                      {callout.name}
                    </a>
                  </h3>
                  <p className='text-base font-semibold text-gray-900'>
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Category section */}
        {/* <section
          aria-labelledby='category-heading'
          className='pt-24  sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8'
        >
          <div className='px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0'>
            <h2
              id='category-heading'
              className='text-2xl font-extrabold tracking-tight text-brown-900 dark:text-offwhite-10'
            >
              Shop by Category
            </h2>
            <a
              href='#'
              className='hidden text-sm font-semibold text-green-600 hover:text-green-500 sm:block'
            >
              Browse all categories<span aria-hidden='true'> &rarr;</span>
            </a>
          </div>
          <div className='mt-4 flow-root'>
            <div className='-my-2'>
              <div className='relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible'>
                <div className='min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0'>
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className='relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto'
                    >
                      <span aria-hidden='true' className='absolute inset-0'>
                        <img
                          src={category.imageSrc}
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </span>
                      <span
                        aria-hidden='true'
                        className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50'
                      />
                      <span className='relative mt-auto text-center text-xl font-bold text-white'>
                        {category.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-6 px-4 sm:hidden'>
            <a
              href='#'
              className='block text-sm font-semibold text-green-600 hover:text-green-500'
            >
              Browse all categories<span aria-hidden='true'> &rarr;</span>
            </a>
          </div>
        </section> */}

        {/* Cta2 section */}
        {/* <section
          aria-labelledby='social-impact-heading'
          className='mx-auto max-w-7xl px-4 sm:px-6 sm:pt-32 lg:px-8'
        >
          <div className='relative overflow-hidden rounded-lg'>
            <div className='absolute inset-0'>
              <img
                src='https://images.unsplash.com/photo-1636525653613-2a3a05c00759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt=''
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:py-40 sm:px-12 lg:px-16'>
              <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
                <h2
                  id='social-impact-heading'
                  className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'
                >
                  <span className='block sm:inline'>Level up</span>
                  <span className='block sm:inline'>your desk</span>
                </h2>
                <p className='mt-3 text-xl text-white'>
                  Make your desk beautiful and organized. Post a picture to
                  social media and watch it get more likes than life-changing
                  announcements. Reflect on the shallow nature of existence. At
                  least you have a really nice desk setup.
                </p>
                <a
                  href='#'
                  className='mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-tangora-10 hover:bg-gray-100 sm:w-auto'
                >
                  Shop Workspace
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  )
}
export default Categories

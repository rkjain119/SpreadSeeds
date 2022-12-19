import React from 'react'

function Cta() {
  return (
    <section
      aria-labelledby='comfort-heading'
      className='mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8'
    >
      {/* Cta1 section */}
      <div className='relative overflow-hidden rounded-lg'>
        <div className='absolute inset-0'>
          <img
            src='https://images.unsplash.com/photo-1604845152150-79d128ac8817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt=''
            className='h-full w-full object-cover object-center'
          />
        </div>
        <div className='relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16'>
          <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
            <h2
              id='comfort-heading'
              className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'
            >
              Experience the magic of growing plants
            </h2>
            <p className='mt-3 text-xl text-white'>
              Plants are a great addition to our homes and life for both their
              physical and psychological benefits. Explore our curated list of
              green plants and enjoy the online plant shopping experience.
            </p>
            <a
              href='#'
              className='mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-tangora-10 hover:bg-gray-100 sm:w-auto'
            >
              Shop Nature
            </a>
          </div>
        </div>
      </div>
      {/* full width cta */}
      {/* <div className='relative bg-gray-900'>
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
      </div> */}
    </section>
  )
}

export default Cta

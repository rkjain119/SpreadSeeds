import React from 'react'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPathsResult,
} from 'next'
const categories = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
  },
  {
    name: 'Productivity',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
  },
  {
    name: 'Workspace',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
  },
  {
    name: 'Sale',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg',
  },
]
const collections = [
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt:
      'Brown leather key ring with brass metal loops and rivets on wood table.',
    description:
      'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt:
      'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description:
      'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt:
      'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description:
      'Be more productive than enterprise project managers with a single piece of paper.',
  },
]
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt:
            'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt:
            'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt:
            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt:
            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
//
//
const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

function Categories() {
  return (
    <div className='|'>
      <div className='bg-offwhite-10 dark:bg-tangora-10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
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
        </div>
      </div>
      <main className='bg-offwhite-10 dark:bg-tangora-10 '>
        {/* Category section */}
        <section
          aria-labelledby='category-heading'
          className=' pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8'
        >
          <div className='px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0'>
            <h2
              id='category-heading'
              className='text-2xl font-extrabold tracking-tight text-bbrown-20 dark:text-offwhite-10'
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
        </section>
        {/* Featured section */}
        <section
          aria-labelledby='social-impact-heading'
          className='mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8'
        >
          <div className='relative overflow-hidden rounded-lg'>
            <div className='absolute inset-0'>
              <img
                src='https://images.unsplash.com/photo-1636525653613-2a3a05c00759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt=''
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16'>
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
                  className='mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-tangora-10 hover:bg-gray-100 sm:w-auto'
                >
                  Shop Workspace
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Collection section */}
        <section
          aria-labelledby='collection-heading'
          className='mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8'
        >
          <h2
            id='collection-heading'
            className='text-2xl font-extrabold tracking-tight text-tangora-10'
          >
            Shop by Collection
          </h2>
          <p className='mt-4 text-base text-gray-500'>
            Each season, we collaborate with world-class designers to create a
            collection inspired by the natural world.
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
                <h3 className='mt-4 text-base font-semibold text-tangora-10'>
                  {collection.name}
                </h3>
                <p className='mt-2 text-sm text-gray-500 '>
                  {collection.description}
                </p>
              </a>
            ))}
          </div>
        </section>
        {/* Featured section */}
        <section
          aria-labelledby='comfort-heading'
          className='mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8'
        >
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
                  Simple productivity
                </h2>
                <p className='mt-3 text-xl text-white'>
                  Endless tasks, limited hours, a single piece of paper. Not
                  really a haiku, but were doing our best here. No kanban
                  boards, burndown charts, or tangled flowcharts with our Focus
                  system. Just the undeniable urge to fill empty circles.
                </p>
                <a
                  href='#'
                  className='mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-tangora-10 hover:bg-gray-100 sm:w-auto'
                >
                  Shop Focus
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default Categories

export const getServerSideProps: GetServerSideProps<{
  data: any
}> = async (ctx) => {
  const { req, res, params, query } = ctx

  return {
    props: {
      data: null,
    },
  }
}

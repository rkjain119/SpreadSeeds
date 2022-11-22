import { Dialog, Disclosure, Transition } from '@headlessui/react'
import {
  XMarkIcon,
  ShoppingBagIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PlusSmallIcon,
  PlusIcon,
} from '@heroicons/react/24/solid'
import {
  Fragment,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react'
import { classNames } from '../utils'
import SingleProduct from '../components/quickView'
import getProducts from '../services/getProducts'
import { useCart } from '../contexts/cart/cart.context'
export type Products = Product[]

export interface Product {
  // href: string | undefined
  id: string
  name: string
  image: string
  description: string
  price: string
  category: string
  type: string
  botanical: string
  specs: string
  stock: string
}

export type categories = categorie[]

export interface categorie {
  id: Key
  category: string
}

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'pants-shorts', label: 'Pants & Shorts' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
]
const products = [
  {
    id: 1,
    name: 'Basic Tee 8-Pack',
    href: '#',
    price: '$256',
    description:
      'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
    imageAlt:
      'Eight shirts arranged on table in black, olive, grey, blue, white, green, mustard, and green.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
]

export default function Store({
  products,
  categories,
}: {
  products: Products
  categories: categories
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  // console.log(categories)
  const {
    hideAllHandler,
    toggleProductsDetailsHandler,
    productDetailsHandler,
    addItemHandler,
    removeItemHandler,
    isInCartHandler,
    state,
  } = useCart()
  return (
    <>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 z-40 flex lg:hidden'
            onClose={setMobileFiltersOpen}
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
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
                <div className='flex items-center justify-between px-4'>
                  <h2 className='text-lg font-medium text-green-900'>
                    Filters
                  </h2>
                  <button
                    type='button'
                    className='-mr-2 flex h-10 w-10 items-center justify-center p-2 text-green-400 hover:text-green-500'
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Filters */}
                <form className='mt-4'>
                  {filters.map((section) => (
                    <Disclosure
                      as='div'
                      key={section.name}
                      className='border-t border-green-200 pt-4 pb-4'
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className='w-full px-2'>
                            <Disclosure.Button className='flex w-full items-center justify-between p-2 text-green-400 hover:text-green-500'>
                              <span className='text-sm font-medium text-green-900'>
                                {section.name}
                              </span>
                              <span className='ml-6 flex h-7 items-center'>
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-5 w-5 transform'
                                  )}
                                  aria-hidden='true'
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className='px-4 pt-4 pb-2'>
                            <div className='space-y-6'>
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className='flex items-center'
                                >
                                  <input
                                    id={`${section.id}-${optionIdx}-mobile`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type='checkbox'
                                    className='h-4 w-4 rounded border-green-300 text-green-600 focus:ring-green-500'
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                    className='ml-3 text-sm text-green-500'
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className='mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8'>
          <div className='border-b border-green-200 pt-24 pb-10'>
            <h1 className='text-4xl font-extrabold tracking-tight text-green-900'>
              New Arrivals
            </h1>
            <p className='mt-4 text-base text-green-500'>
              Checkout out the latest release of Basic Tees, new and improved
              with four openings!`
            </p>
          </div>

          <div className='pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'>
            <aside>
              <h2 className='sr-only'>Filters</h2>

              <button
                type='button'
                className='inline-flex items-center lg:hidden'
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className='text-sm font-medium text-green-700'>
                  Filters
                </span>
                <PlusSmallIcon
                  className='ml-1 h-5 w-5 flex-shrink-0 text-green-400'
                  aria-hidden='true'
                />
              </button>

              <div className='hidden lg:block'>
                <form className='space-y-10 divide-y divide-green-200'>
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? '' : 'pt-10'}
                    >
                      <fieldset>
                        <legend className='block text-sm font-medium text-green-900'>
                          {section.name}
                        </legend>
                        <div className='space-y-3 pt-6'>
                          {categories.map((option, optionIdx) => (
                            <div key={option.id} className='flex items-center'>
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.id}
                                type='checkbox'
                                className='h-4 w-4 rounded border-green-300 text-green-600 focus:ring-green-500'
                              />
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className='ml-3 text-sm text-green-600'
                              >
                                {option.toString()}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            <section
              aria-labelledby='product-heading'
              className='mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3'
            >
              <h2 id='product-heading' className='sr-only'>
                Products
              </h2>

              <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                {products.map((product) => (
                  // <div key={product.id}>
                  //   <div className='relative'>
                  //     <button
                  //       onClick={() => {
                  //         toggleProductsDetailsHandler(true)
                  //         productDetailsHandler(product)
                  //       }}
                  //     >
                  //       <div className='aspect-w-3 aspect-h-4 bg-green-200 group-hover:opacity-75 sm:aspect-none sm:h-96'>
                  //         <img
                  //           src={product.image}
                  //           alt={product.name}
                  //           className='h-full w-full object-cover object-center sm:h-full sm:w-full'
                  //         />
                  //       </div>
                  //       <span aria-hidden='true' className='absolute inset-0' />
                  //       {/* {product.name} */}
                  //     </button>

                  //     <div className='mt-4 flex justify-between'>
                  //       <div className='ml-2'>
                  //         <h3 className=' font-medium0'>{product.name}</h3>
                  //         <p className='mt-1 text-sm '>{product.type}</p>
                  //       </div>
                  // <div className='flex flex-col align-middle'>
                  //   <button className='relative flex  items-center justify-center  rounded-md '>
                  //     <ShoppingBagIcon className='h-8' />
                  //   </button>
                  //   <p className='mr-4 text-lg font-semibold drop-shadow-2xl '>
                  //     ₹ {product.price}
                  //   </p>
                  // </div>
                  //     </div>
                  //   </div>
                  // </div>
                  <div
                    key={product.id}
                    className='group relative flex flex-col overflow-hidden rounded-lg  border-green-200 bg-offwhite-20'
                  >
                    <div className='aspect-w-3 aspect-h-4 bg-green-200 group-hover:opacity-75 sm:aspect-none sm:h-96'>
                      <img
                        onClick={() => {
                          toggleProductsDetailsHandler(true)
                          productDetailsHandler(product)
                        }}
                        src={product.image}
                        alt={product.name}
                        className='h-full w-full object-cover object-center sm:h-full sm:w-full'
                      />
                    </div>
                    <div className='flex flex-1  justify-between space-y-2 p-4'>
                      <div className=''>
                        <button
                          className=' text-left'
                          onClick={() => {
                            toggleProductsDetailsHandler(true)
                            productDetailsHandler(product)
                          }}
                        >
                          <h3 className='mt-2 text-base font-medium text-green-900'>
                            {product.name}
                          </h3>
                          <p className='text-sm text-green-500'>
                            {product.type}
                          </p>
                        </button>
                      </div>
                      <div className='flex flex-col items-end  '>
                        {isInCartHandler(product.id) ? (
                          <button
                            onClick={() => removeItemHandler(product)}
                            className=' '
                          >
                            <TrashIcon className='h-7' />
                          </button>
                        ) : (
                          <button
                            onClick={() => addItemHandler(product)}
                            className=' '
                          >
                            <ShoppingBagIcon className='h-7' />
                          </button>
                        )}

                        <p className='font-semibold drop-shadow-2xl '>
                          ₹ {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {state.showDetails && <SingleProduct />}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const { products, categories } = await getProducts()

  return {
    props: {
      products,
      categories,
    },
  }
}

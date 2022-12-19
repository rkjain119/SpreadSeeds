import {
  CheckBadgeIcon,
  CalendarIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    id: 1,
    name: 'Free, contactless delivery',
    description: 'The shipping is on us',
    icon: TruckIcon,
  },
  {
    id: 2,
    name: 'No questions asked returns',
    description: 'Send it back for free',
    icon: CheckBadgeIcon,
  },
  {
    id: 3,
    name: '10-day warranty',
    description: 'We’ll replace it with a new one',
    icon: CalendarIcon,
  },
]

export default function Features() {
  return (
    <>
      <div className='mx-auto max-w-7xl divide-y divide-brown-200 dark:divide-offwhite-10 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x lg:py-8'>
        {features.map((feature) => {
          return (
            <div
              className='py-8 lg:w-1/3 lg:flex-none lg:py-0'
              key={feature.id}
            >
              <div className='mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8'>
                <feature.icon
                  className='h-8 w-8 flex-shrink-0 text-green-600'
                  aria-hidden='true'
                />
                <div className='ml-4 flex flex-auto flex-col-reverse'>
                  <h3 className='font-medium text-brown-900 dark:text-offwhite-20 '>
                    {feature.name}
                  </h3>
                  <p className='text-sm text-brown-500 dark:text-green-500 '>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

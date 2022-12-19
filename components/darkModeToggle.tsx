import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { classNames } from '../utils'
import { Moon, Sun } from './icons'
export default function DarkMode() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      className={classNames(
        enabled ? 'bg-tangora-10/10' : 'bg-offwhite-10/10',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-tangora-10 focus:ring-offset-2'
      )}
    >
      <span className='sr-only'>Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            enabled
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden='true'
        >
          <Sun className='h-6 w-6' />
        </span>
        <span
          className={classNames(
            enabled
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden='true'
        >
          <Moon className='h-6 w-6' />
        </span>
      </span>
    </Switch>
  )
}
